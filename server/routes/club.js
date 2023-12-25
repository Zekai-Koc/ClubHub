import express from "express";
import { getClubs } from "../controllers/club.js";

const router = express.Router();

router.get("/", getClubs);

export default router;
