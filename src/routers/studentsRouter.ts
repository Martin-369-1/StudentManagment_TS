import { Router } from "express";
const router = Router();

import {
  getStudents,
  getAddStudent,
  postAddStudent,
  deleteStudent,
  getEditStudent,
  putEditStudent,
} from "../controllers/studentController";

import { isUserLoggedIn } from "../middlewares/userAuth";

router.use(isUserLoggedIn);

router.route("/").get(getStudents);

router.route("/student").get(getAddStudent).post(postAddStudent);

router
  .route("/student/:id")
  .get(getEditStudent)
  .put(putEditStudent)
  .delete(deleteStudent);

export default router;
