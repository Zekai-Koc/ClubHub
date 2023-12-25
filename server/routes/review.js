import express from "express";
import { getReview, getReviews } from "../controllers/review.js";

const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReview);

export default router;
