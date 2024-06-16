import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { UserRouter } from "./router/User.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

//This line of code tells the application to use the UserRouter middleware
//for any requests starting with "/auth".
app.use("/auth", UserRouter);

mongoose.connect("mongodb+srv://sairam:sairam@login.zyfpnsv.mongodb.net/");

app.listen(process.env.PORT, () => {
  console.log("Server is running....");
});
