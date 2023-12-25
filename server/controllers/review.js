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

export const updateReview = async (req, res) => {
   const { id: _id } = req.params;
   const review = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No review with that id");

   const updatedReview = await Review.findByIdAndUpdate(_id, review, {
      new: true,
   });

   res.json(updatedReview);
};

export const deleteReview = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No review with that id");

   await Review.findByIdAndRemove(id);

   res.json({ message: "Review deleted successfully." });
};
