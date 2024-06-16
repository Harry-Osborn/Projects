import express from "express";
import bcryt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//this is like creating a mini-map or blueprint for handling different parts of a website or application.
//It helps organize and direct incoming requests to the right place, making sure each request gets handled properly.
//It's like having separate roads for different types of traffic, so cars, bikes, and pedestrians all know where to go without getting mixed up.
const router = express.Router();

import { User } from "../models/User.model.js";

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).json({ message: "user already existed" });
  }

  const hashpassword = await bcryt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({ message: "record registed" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "user is not registered" });
  }

  const validPassword = await bcryt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "login successfully" });
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "user not registered" });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hpatnaik@gitam.in",
        pass: "mhgj pbqt mthh vwnc",
      },
    });

    var mailOptions = {
      from: "hpatnaik@gitam.in",
      to: email,
      subject: "Reset password",
      text: `http://localhost:5173/reset/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "error sending email" });
      } else {
        return res.json({ status: true, message: "email sent" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bcryt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "updated password" });
  } catch (err) {
    return res.json("invalid token");
  }
});

export { router as UserRouter };
