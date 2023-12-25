import express from "express";
import {
   getClubs,
   getClub,
   createClub,
   updateClub,
   deleteClub,
} from "../controllers/club.js";

const router = express.Router();

router.get("/", getClubs);
router.get("/:id", getClub);
router.post("/", createClub);
router.patch("/:id", updateClub);
router.delete("/:id", deleteClub);

export default router;
