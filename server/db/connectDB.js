import mongoose from "mongoose";
import "dotenv/config";

let DB = process.env.MONGODB_DATABASE.replace(
   "<PASSWORD>",
   process.env.MONGODB_USER_PASS
);
DB = DB.replace("<USERNAME>", process.env.MONGODB_USER_NAME);

const connectDB = () =>
   mongoose
      .connect(DB)
      .then(() => {
         console.log("DB connection successful.");
      })
      .catch(() => console.log(`DB connection error! Check DB credentials.`));

export default connectDB;
