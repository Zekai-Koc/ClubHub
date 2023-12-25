import Review from "../models/Activity.js";

export const getReviews = async (req, res) => {
   try {
      const reviews = await Review.find();
      res.status(200).json({
         status: "success",
         results: users.length,
         reviews,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
