import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

let DB = process.env.MONGODB_DATABASE.replace(
   "<PASSWORD>",
   process.env.MONGODB_USER_PASS
);
DB = DB.replace("<USERNAME>", process.env.MONGODB_USER_NAME);

mongoose
   .connect(DB)
   .then(() => {
      console.log("DB connection successful.");
   })
   .catch(() => console.log(`DB connection error! Check DB credentials.`));

const port = process.env.PORT || 9999;

app.listen(port, () => console.log(`Listening on port: ${port}`));
