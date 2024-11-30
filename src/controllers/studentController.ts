import { Request,Response } from "express";

export const getStudents=(req:Request,res:Response)=>{
    res.render('students',{user:req.user})
}