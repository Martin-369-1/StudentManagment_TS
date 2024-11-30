import User from "../models/userModel";
import { StatusCodes } from "../utils/constants";

export const addUser = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const user = await User.findOne({ email });

    if (user) {
      return {
        success: false,
        statusCode: StatusCodes.CONFLICT,
        message: "Email Already Exist",
      };
    }

    const newUser = new User({
      username,
      password,
      email,
    });

    await newUser.save();
    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "New User Created",
    };
  } catch (err) {
    console.log("AddUserServiceError", err);
    return {
      success: false,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Error while creating User",
    };
  }
};
