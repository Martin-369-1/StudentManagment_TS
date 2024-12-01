import { Request, Response } from "express";
import { StatusCodes } from "../utils/constants";
import {
  addStudent,
  studentList,
  deleteStudentByID, editStudent,getStudent
} from "../services/studentService";

export const getStudents = async (req: Request, res: Response) => {
  try {
    const pageNo = req.query.pageNo ? Number(req.query.pageNo) : 1;
    const search = req.query.search ? String(req.query.search) : "";
    const students = await studentList(
      (req.user as { sub: string }).sub,
      pageNo,
      search
    );
    res.render("students", { user: req.user, students, search });
  } catch (err) {
    console.log(err);
  }
};

export const getAddStudent = (req: Request, res: Response) => {
  res.render("addStudent", { user: req.user });
};

export const postAddStudent = async (req: Request, res: Response) => {
  try {
    const {
      name,
      DOB,
      gender,
      admissionNo,
      grade,
      enrollmentDate,
    }: {
      name: string;
      DOB: Date;
      gender: string;
      admissionNo: string;
      grade: string;
      enrollmentDate: Date;
    } = req.body;

    if (!req.user) {
      //TODO
      return;
    }

    const result = await addStudent(
      (req.user as { sub: string }).sub,
      name,
      DOB,
      gender,
      admissionNo,
      grade,
      enrollmentDate
    );

    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      redirectUrl: "/students",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    
    await deleteStudentByID(id);

    res
      .status(StatusCodes.OK)
      .json({
        success: true,
        message: "student deleted",
        redirectUrl: "students",
      });

    
  } catch (err) {
    console.log(err);
  }
};

export const getEditStudent=async(req:Request,res:Response)=>{
  try{
    const studentID=req.params.id;
    const student=await getStudent(studentID);
    res.render('editStudent',{user:req.user,student})

  }catch(err){
    console.log(err);
    
  }
}

export const putEditStudent = async (req: Request, res: Response) => {
  try {
    const id=req.params.id;
    console.log(id);
    
    const {
      name,
      DOB,
      gender,
      admissionNo,
      grade,
      enrollmentDate,
    }: {
      name: string;
      DOB: Date;
      gender: string;
      admissionNo: string;
      grade: string;
      enrollmentDate: Date;
    } = req.body;

    const result = await editStudent(
      id,
      name,
      DOB,
      gender,
      admissionNo,
      grade,
      enrollmentDate
    );
    
    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      redirectUrl: "/students",
    });
  } catch (err) {
    console.log(err);
  }
};