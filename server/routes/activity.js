import express from "express";
import {
   getActivities,
   getActivity,
   createActivity,
} from "../controllers/activity.js";

const router = express.Router();

router.get("/", getActivities);
router.get("/:id", getActivity);
router.post("/", createActivity);
export default router;
