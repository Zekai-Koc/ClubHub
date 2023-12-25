import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.send("club router");
});

export default router;
