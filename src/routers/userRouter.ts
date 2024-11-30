import { Router } from "express";
const router = Router();

//controllers
import { getLogin, postLogin,getRegister,postRegister} from "../controllers/userController";

//middlewares
import { isUserLoggedIn } from "../middlewares/userAuth";

router.get("/",isUserLoggedIn,(req, res) => {
  res.render("index");
});

router.route("/login").get(getLogin).post(postLogin)

router.route("/register").get(getRegister).post(postRegister)

export default router;
