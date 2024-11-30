import passport from "passport";
import { Request, Response, NextFunction } from "express";

export const isUserLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", async (err: Error, token: string, info: any) => {

    if (err || !token) {
      return res.redirect('/login')
    }
    
    req.user = token.sub;
    next();
  })(req, res, next);
};

export const isUserLoggedOut=(req: Request,
  res: Response,
  next: NextFunction)=>{
    passport.authenticate("jwt", async (err: Error, token: string, info: any) => {      
      if (err || !token) {
        return next();
      }
      
      req.user = token.sub;
      res.redirect('/')
    })(req, res, next);
}
