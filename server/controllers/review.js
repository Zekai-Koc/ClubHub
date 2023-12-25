import Review from "../models/Activity.js";

export const getReviews = async (req, res) => {
   try {
      const reviews = await Review.find();
      res.status(200).json({
         status: "success",
         results: reviews.length,
         reviews,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getReview = async (req, res) => {
   try {
      const review = await Review.findById(req.params.id);
      res.status(200).json({
         status: "success",
         review,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createReview = async (req, res) => {
   const review = req.body;

   const newReview = new Review(review);

   try {
      await newReview.save();

      res.status(201).json(newReview);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};
