import { Router } from "express";
const router = Router();

//controllers
import { getLogin, postLogin,getRegister,postRegister,getLogout} from "../controllers/userController";
import { getHome } from "../controllers/homeController";

//middlewares
import { isUserLoggedIn ,isUserLoggedOut} from "../middlewares/userAuth";

router.get("/",isUserLoggedIn,getHome);

router.route("/login").get(isUserLoggedOut,getLogin).post(postLogin)

router.get('/logout',getLogout)

router.route("/register").get(isUserLoggedOut,getRegister).post(postRegister)

export default router;
