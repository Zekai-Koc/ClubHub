import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const port = process.env.PORT || 9999;

// app.get("/", function (req, res) {
//    res.send("Hello World");
// });

app.listen(port, () => console.log(`Listening on port: ${port}`));
