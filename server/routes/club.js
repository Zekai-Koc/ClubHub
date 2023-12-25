import express from "express";
import { getClubs, getClub, createClub } from "../controllers/club.js";

const router = express.Router();

router.get("/", getClubs);
router.get("/:id", getClub);
router.post("/", createClub);

export default router;
