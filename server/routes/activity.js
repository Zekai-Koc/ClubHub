import express from "express";
import { getActivities, getActivity } from "../controllers/activity.js";

const router = express.Router();

router.get("/", getActivities);
router.get("/:id", getActivity);

export default router;
