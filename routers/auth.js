import { Router } from "express";
import { signIn } from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";
import { validator } from "../middlewares/validator.js";
import { schemaUpdateAuth } from "../schemas/user/update.js";
import passport from "../middlewares/passport.js";
import signout from "../controllers/auth/signout.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import { signInGoogle } from "../controllers/auth/signInGoogle.js";
import validateToken from "../controllers/auth/validateToken.js";

const router = Router();

router.post(
  "/signIn",
  validator(schemaUpdateAuth),
  accountNoExist,
  isValidadPassword,
  generateToken,
  signIn
);

router.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

router.get("/validateToken",passport.authenticate("jwt", { session: false }), validateToken);

router.get(
  "/signIn/google",
  passportGoogle.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/signIn/google/callback",
  passportGoogle.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  generateToken,
  signInGoogle
);

export default router;
