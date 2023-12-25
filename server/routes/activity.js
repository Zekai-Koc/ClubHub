import express from "express";
import {
   getActivities,
   getActivity,
   createActivity,
   updateActivity,
   deleteActivity,
} from "../controllers/activity.js";

const router = express.Router();

router.get("/", getActivities);
router.get("/:id", getActivity);
router.post("/", createActivity);
router.patch("/:id", updateActivity);
router.delete("/:id", deleteActivity);

export default router;
