import { Router } from "express";
const router=Router();

import { getStudents } from "../controllers/studentController";

import { isUserLoggedIn } from "../middlewares/userAuth";

router.route('/').get(isUserLoggedIn,getStudents);

export default router;