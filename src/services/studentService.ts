import Student from "../models/studentModel";
import { StatusCodes } from "../utils/constants";

export const studentList = async (
  userID: string,
  pageNo: number,
  search: string
) => {
  const findQuery = { userID, name: new RegExp(search, "i") };
  try {
    const studentList = await Student.find(findQuery);

    return studentList;
  } catch (err) {
    console.log(err);
  }
};

export const addStudent = async (
  userID: string,
  name: string,
  DOB: Date,
  gender: string,
  admissionNo: string,
  grade: string,
  enrollmentDate: Date
) => {
  try {
    const student = await Student.findOne({ admissionNo });

    if (student) {
      return {
        success: false,
        statusCode: StatusCodes.CONFLICT,
        message: "Student with admission no already exist",
      };
    }

    const newStudent = new Student({
      userID,
      name,
      DOB,
      gender,
      admissionNo,
      grade,
      enrollmentDate,
    });

    await newStudent.save();
    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "New Student Created",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Error while creating Student",
    };
  }
};

export const getStudent = async (studentID:string)=>{
  try{
    return await Student.findOne({_id:studentID});
  }catch(err){
    console.log(err);
    
  }
}

export const editStudent = async (
  studentID: string,
  name: string,
  DOB: Date,
  gender: string,
  admissionNo: string,
  grade: string,
  enrollmentDate: Date
) => {
  try {
    console.log("dd");
    
    const student = await Student.findOne({ admissionNo , _id:{$ne:studentID}});

    if (student) {
      return {
        success: false,
        statusCode: StatusCodes.CONFLICT,
        message: "Student with admission no already exist",
      };
    }

    await Student.updateOne({_id:studentID},{name,DOB,gender,admissionNo,grade,enrollmentDate})

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Student Updated",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Error while creating Student",
    };
  }
};

export const deleteStudentByID = async (studentID: string) => {
  try {
    await Student.deleteOne({ _id: studentID });
  } catch (err) {
    console.log(err);
  }
};
