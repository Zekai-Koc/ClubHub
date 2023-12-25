import express from "express";
import { getReview, getReviews, createReview } from "../controllers/review.js";

const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReview);
router.post("/", createReview);

export default router;
