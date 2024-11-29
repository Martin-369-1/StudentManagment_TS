import { Request,Response } from "express";
import generateAccessToken from "../utils/jwtUtil";

export const getLogin=(req:Request,res:Response)=>{
    res.render('login')
}

export const postLogin=async(req:Request,res:Response)=>{
    try{
        const {username,password}:{username:string,password:string}=req.body;
        if(username=="ayush" && password=="123"){
            const token=generateAccessToken(username,"1212")
            res.cookie('jwt',token)
            res.json({message:"successs"})
            return;
        }
        res.send({message:"faliure"})

    }catch(err){
        console.log(err);
    }
}