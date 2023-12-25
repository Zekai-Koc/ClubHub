import User from "../models/User.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
   try {
      const users = await User.find();
      res.status(200).json({
         status: "success",
         results: users.length,
         users,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getUser = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      res.status(200).json({
         status: "success",
         user,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createUser = async (req, res) => {
   const user = req.body;

   const newUser = new User(user);

   try {
      await newUser.save();

      res.status(201).json(newUser);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateUser = async (req, res) => {
   const { id: _id } = req.params;
   const user = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No user with that id");

   const updatedUser = await User.findByIdAndUpdate(_id, user, {
      new: true,
   });

   res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No user with that id");

   await User.findByIdAndRemove(id);

   res.json({ message: "User deleted successfully." });
};

export const getTotalUsersNum = async (req, res) => {
   try {
      const totalUsers = await User.countDocuments();
      res.status(200).json({
         status: "success",
         totalUsers,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
