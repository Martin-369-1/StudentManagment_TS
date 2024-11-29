import passport from "passport";
import { Request } from "express";
import {ExtractJwt, Strategy as jwtStrategy,JwtFromRequestFunction} from "passport-jwt"
import fs from "fs"
import path from "path";

const pub_key=fs.readFileSync(path.join(__dirname,"../../keys/rsa_pub_key.pem"))

const extractTokenFromCookies:JwtFromRequestFunction = (req:Request) => {
    console.log("extract token");
    
    const token = req.cookies['jwt'];  
    return token; 
  };

const JwtStrategy=new jwtStrategy(
    {
        jwtFromRequest:ExtractJwt.fromExtractors([extractTokenFromCookies]),
        secretOrKey:pub_key
    },
    async(token,done)=>{
        console.log(token);
        done(null,token)
    }
)

passport.use(JwtStrategy)

export default passport;