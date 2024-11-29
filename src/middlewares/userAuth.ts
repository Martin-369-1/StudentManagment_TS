import passport from "passport";
import { Request,Response,NextFunction } from "express";

export const isUserLoggedIn=(req:Request,res:Response,next:NextFunction)=>{
    passport.authenticate('jwt',async(err:Error,token:string,info:any)=>{
        if(err){
            console.log(err);
            
        }
        if(err || !token){
          res.send("error")
        }else{
            next()
        }
    })(req,res,next);
    
}