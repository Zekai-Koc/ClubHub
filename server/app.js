import express from "express";
import morgan from "morgan";
import club from "./routes/club.js";
import activity from "./routes/activity.js";
import review from "./routes/review.js";
import user from "./routes/user.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/clubs", club);
app.use("/api/v1/activities", activity);
app.use("/api/v1/reviews", review);
app.use("/api/v1/users", user);

export default app;
