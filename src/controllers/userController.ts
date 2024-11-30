import { Request, Response } from "express";
import generateAccessToken from "../utils/jwtUtil";
import { addUser } from "../services/userService";
import { StatusCodes } from "../utils/constants";

export const getLogin = (req: Request, res: Response) => {
  res.render("login");
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;
    if (username == "ayush" && password == "123") {
      const token = generateAccessToken(username, "1212");
      res.cookie("jwt", token);
      res.json({ message: "successs" });
      return;
    }
    res.send({ message: "faliure" });
  } catch (err) {
    console.log(err);
  }
};

export const getRegister = (req: Request, res: Response) => {
  res.render("register");
};

export const postRegister = async (req: Request, res: Response) => {
  try {
    const {
      username,
      password,
      confirmPassword,
      email,
    }: {
      username: string;
      password: string;
      confirmPassword: string;
      email: string;
    } = req.body;

    const result = await addUser(username, password, email);

    res
      .status(result.statusCode)
      .json({ success: result.success, message: result.message ,redirectUrl:'/login'});


  } catch (err) {
    console.log(err);
  }
};
