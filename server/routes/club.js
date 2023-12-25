import express from "express";
import {
   getClubs,
   getClub,
   createClub,
   updateClub,
} from "../controllers/club.js";

const router = express.Router();

router.get("/", getClubs);
router.get("/:id", getClub);
router.post("/", createClub);
router.patch("/:id", updateClub);

export default router;
