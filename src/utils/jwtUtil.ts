import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const priv_key=fs.readFileSync(path.join(__dirname,'../../keys/rsa_priv_key.pem'))

const generateAccessToken=(username:string,id:string)=>{
    return jwt.sign({sub:id,username},priv_key,{
        expiresIn:"1h",
        algorithm:"RS256"
    })
}

export default generateAccessToken;