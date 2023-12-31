import express from "express";
import {
   getReview,
   getReviews,
   createReview,
   updateReview,
   deleteReview,
} from "../controllers/review.js";

const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReview);
router.post("/", createReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
