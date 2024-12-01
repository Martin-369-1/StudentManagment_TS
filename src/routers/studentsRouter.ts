import { Router } from "express";
const router = Router();

import { getStudents, getAddStudent,postAddStudent,deleteStudent,getEditStudent ,putEditStudent} from "../controllers/studentController";

import { isUserLoggedIn } from "../middlewares/userAuth";

router.route("/").get(isUserLoggedIn, getStudents);

router.route("/student").get(isUserLoggedIn, getAddStudent).post(isUserLoggedIn,postAddStudent)
router.route("/student/:id").get(isUserLoggedIn,getEditStudent).put(putEditStudent).delete(isUserLoggedIn,deleteStudent)

export default router;
