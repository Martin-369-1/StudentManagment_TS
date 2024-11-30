import express from "express";
import { config } from "dotenv";
import path from "path";
import connectMongo from "./configs/dbconfig";
import cookieParser from "cookie-parser"
import passport from "./configs/passport"
config();
const app = express();

import userRouter from "./routers/userRouter";

//Middlewares
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())

//Routes
app.use("/", userRouter);

connectMongo();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
