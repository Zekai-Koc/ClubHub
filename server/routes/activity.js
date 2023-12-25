import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.send("activity router");
});

export default router;
