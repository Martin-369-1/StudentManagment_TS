import { getUserByID } from "../services/userService";
import { Request, Response } from "express";

export const getHome = (req: Request, res: Response) => {
  res.render("index", { user: req.user });
};
