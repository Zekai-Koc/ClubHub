import express from "express";
import { getClubs, getClub } from "../controllers/club.js";

const router = express.Router();

router.get("/", getClubs);
router.get("/:id", getClub);

export default router;
