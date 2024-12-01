import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "../utils/constants";

export const isUserLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", async (err: Error, token: string, info: any) => {
    if (err || !token) {
      if (req.method == "GET") {
        return res.status(StatusCodes.UNAUTHORIZED).redirect("/login");
      } else {
        return res.status(500).json({
          success: false,
          message: "Token expired login again ",
        });
      }
    }

    req.user = token;

    next();
  })(req, res, next);
};

export const isUserLoggedOut = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", async (err: Error, token: string, info: any) => {
    if (err || !token) {
      return next();
    }

    req.user = token.sub;
    res.redirect("/");
  })(req, res, next);
};
