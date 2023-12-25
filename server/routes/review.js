import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.send("review router");
});

export default router;
