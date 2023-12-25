import express from "express";
import {
   getActivities,
   getActivity,
   createActivity,
   updateActivity,
} from "../controllers/activity.js";

const router = express.Router();

router.get("/", getActivities);
router.get("/:id", getActivity);
router.post("/", createActivity);
router.patch("/:id", updateActivity);

export default router;
