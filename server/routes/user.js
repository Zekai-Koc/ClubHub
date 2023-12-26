import express from "express";
import {
   getUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser,
   getTotalUsersNum,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/totalUserNumber", getTotalUsersNum);

export default router;
