import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

const port = process.env.PORT || 9999;

app.get("/", function (req, res) {
   res.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
