import express from "express";
import {
   getUsers,
   getUser,
   createUser,
   updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);

export default router;
