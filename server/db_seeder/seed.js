import "dotenv/config";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import Club from "../models/Club.js";
import Activity from "../models/Activity.js";
import Review from "../models/Review.js";
import User from "../models/User.js";

import fs from "fs";
import connectDB from "../db/connectDB.js";

const jsonFilePathClubsMerged = "./db_seeder/json_files/clubs.json";
const jsonDataClubs = fs.readFileSync(jsonFilePathClubsMerged, "utf8");
const clubs = JSON.parse(jsonDataClubs);

const jsonFilePathActivities = "./db_seeder/json_files/activities.json";
const jsonDataActivities = fs.readFileSync(jsonFilePathActivities, "utf8");
const activities = JSON.parse(jsonDataActivities);

const jsonFilePathReviews = "./db_seeder/json_files/reviews.json";
const jsonDataReviews = fs.readFileSync(jsonFilePathReviews, "utf8");
const reviews = JSON.parse(jsonDataReviews);

async function deleteExistingClubs() {
   try {
      await Club.deleteMany({});
      console.log("Deleted existing Clubs.");
   } catch (error) {
      console.error("Error deleting existing Clubs:", error);
   }
}

async function deleteExistingActivities() {
   try {
      await Activity.deleteMany({});
      console.log("Deleted existing Activities.");
   } catch (error) {
      console.error("Error deleting existing Activities:", error);
   }
}

async function deleteExistingUsers() {
   try {
      await User.deleteMany({});
      console.log("Deleted existing Users.");
   } catch (error) {
      console.error("Error deleting existing data:", error);
   }
}

async function deleteExistingReviews() {
   try {
      await Review.deleteMany({});
      console.log("Deleted existing Reviews.");
   } catch (error) {
      console.error("Error deleting existing data:", error);
   }
}

async function generateActivities(currentClub) {
   const clubCategoryObject = activities.find(
      (item) => item.category === currentClub.category
   );

   if (clubCategoryObject) {
      const activitiesList = clubCategoryObject.activities;

      const listActivityId = [];

      let singleActivity;
      for (let i = 0; i < activitiesList.length; i++) {
         const photoList = await generateRandomPhotoUriList(
            currentClub.category,
            20
         );
         if (activitiesList[i].address) {
            singleActivity = {
               ...activitiesList[i],
               club: currentClub._id,
               uriPhotos: photoList,
               category: currentClub.category,
               // type: "activities",
            };
         } else {
            singleActivity = {
               ...activitiesList[i],
               club: currentClub._id,
               address: currentClub.address,
               uriPhotos: photoList,
               category: currentClub.category,
               // type: "activities",
            };
         }

         // console.log("singleActivity ", singleActivity);
         const activity = new Activity(singleActivity);
         const result = await activity.save();
         listActivityId.push(result._id);
      }
      return listActivityId;
   } else {
      console.log("Category not found:", currentClub.category);
      return [];
   }
}

async function generateRandomPhotoUriList(category, totalAmountOfPhotos) {
   const listPhotos = [];
   for (let i = 0; i < totalAmountOfPhotos; i++) {
      listPhotos.push(faker.image.urlLoremFlickr({ category: category }));
   }
   return listPhotos;
}

async function generateDummyClubs(clubData) {
   try {
      for (let i = 0; i < clubData.length; i++) {
         console.log("Creating club data #:", i + 1);

         const club = new Club(clubData[i]);
         const result = await club.save();

         const activityIdList = await generateActivities(result);

         const photoList = await generateRandomPhotoUriList(
            result.category,
            20
         );
         await Club.updateOne(
            { _id: result._id },
            {
               $push: {
                  activities: activityIdList,
                  uriPhotos: photoList,
               },
            }
         );
      }
      console.log("Clubs created successfully!");
   } catch (error) {
      console.error("Error creating clubs:", error);
   }
}

function getRandomDateOfBirth() {
   const start = new Date(1970, 0, 1);
   const end = new Date(2005, 11, 31);
   return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
   );
}

async function generateDummyUsers(totalUserNumber) {
   try {
      for (let i = 0; i < totalUserNumber; i++) {
         const user = new User({
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            dateOfBirth: getRandomDateOfBirth(),
            profileImage: faker.image.avatar(),
         });
         console.log("saving user:", i);
         await user.save();
      }
      console.log("Dummy users created successfully!");
   } catch (error) {
      console.error("Error creating dummy users:", error);
   }
}

async function generateReviews(tempUsers, tempClubs, tempActivities) {
   for (const user of tempUsers) {
      for (const club of tempClubs) {
         // Generate and save reviews for clubs
         console.log("Generating reviews for club:", club.name);
         try {
            const review = new Review({
               clubOrActivityId: club._id,
               onModel: "Club",
               userId: user._id,
               content: reviews[Math.floor(Math.random() * reviews.length) + 1],
               rating: Math.floor(Math.random() * 5) + 1,
            });
            const newReview = await review.save();

            // Update user and club with the new review
            await User.findByIdAndUpdate(
               user._id,
               { $push: { reviews: newReview._id } },
               { new: true }
            );
            await Club.findByIdAndUpdate(
               club._id,
               { $push: { reviews: newReview._id } },
               { new: true }
            );

            // Calculate the average rating for the club and save it
            await club.calculateAverageRating();
         } catch (error) {
            console.error("Error generating club review:", error);
         }
      }
      for (const activity of tempActivities) {
         // Generate and save reviews for clubs
         console.log("Generating reviews for activity:", activity.name);
         try {
            const review = new Review({
               clubOrActivityId: activity._id,
               onModel: "Activity",
               userId: user._id,
               content: reviews[Math.floor(Math.random() * reviews.length) + 1],
               rating: Math.floor(Math.random() * 5) + 1,
            });
            const newReview = await review.save();

            // Update user and club with the new review
            await User.findByIdAndUpdate(
               user._id,
               { $push: { reviews: newReview._id } },
               { new: true }
            );
            await Activity.findByIdAndUpdate(
               activity._id,
               { $push: { reviews: newReview._id } },
               { new: true }
            );

            // Calculate the average rating for the club and save it
            await activity.calculateAverageRating();
         } catch (error) {
            console.error("Error generating activity review:", error);
         }
      }
   }
}

async function populateData() {
   await connectDB();
   const startTime = Date.now();
   console.log("Seeding the database...");
   //  await deleteExistingClubs();
   //  await deleteExistingActivities();
   //  await deleteExistingUsers();
   await deleteExistingReviews();

   const tempUsers = await User.find();
   const tempClubs = await Club.find();
   const tempActivities = await Activity.find();

   //  await generateDummyClubs(clubs);
   //  await generateDummyUsers(10);

   await generateReviews(tempUsers, tempClubs, tempActivities);

   await mongoose.connection.close();
   console.log("Seeding done successfully!");
   const endTime = Date.now();
   const duration = endTime - startTime;
   console.log(`Execution took ${(duration / 1000 / 60).toFixed(2)} minutes`);
   process.exit(0);
}

populateData();
