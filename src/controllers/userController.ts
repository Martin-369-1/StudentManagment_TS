import { Request, Response } from "express";
import generateAccessToken from "../utils/jwtUtil";
import { addUser,getUserByEmail,getUserByID } from "../services/userService";
import { StatusCodes } from "../utils/constants";

export const getLogin = (req: Request, res: Response) => {
  res.render("login");
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    const { email, password }: { email: string; password: string } =
      req.body;
    
    const user=await getUserByEmail(email);

    if(!user){
      res.status(StatusCodes.UNAUTHORIZED).json({success:false,message:'User not exist'})
      return;
    }

    if(user.password != password){
      res.status(StatusCodes.UNAUTHORIZED).json({success:false,message:'Incorrect password'})
      return;
    }

    const jwtToken=generateAccessToken(user.email,user.id);
    res.cookie('jwt',jwtToken).status(StatusCodes.OK).json({success:true,message:'Logged in',redirectUrl:'/'})

  } catch (err) {
    console.log(err);
  }
};

export const getLogout=(req:Request,res:Response)=>{
  res.clearCookie('jwt');
  res.redirect('/login')
}

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
