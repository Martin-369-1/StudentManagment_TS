import { Router } from "express";
const router = Router();

//controllers
import { getLogin, postLogin,getRegister,postRegister} from "../controllers/userController";

//middlewares
import { isUserLoggedIn ,isUserLoggedOut} from "../middlewares/userAuth";

router.get("/",isUserLoggedIn,(req, res) => {
  res.render("index");
});

router.route("/login").get(isUserLoggedOut,getLogin).post(postLogin)

router.route("/register").get(isUserLoggedOut,getRegister).post(postRegister)

export default router;
