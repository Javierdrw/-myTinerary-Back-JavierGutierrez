import { Router } from "express";
import {
  readUserAll,
  readUserId,
  readUserItinerary,
} from "../controllers/user/read.js";
import { register } from "../controllers/user/register.js";
import { deleteUser } from "../controllers/user/delete.js";
import { updateUser } from "../controllers/user/update.js";
import passport from "../middlewares/passport.js";
import { validatorParams } from "../middlewares/validator.js";
import { schemaReadUser } from "../schemas/user/read.js";
import { userExistById } from "../middlewares/userExistById.js";
import { userExistByIdByItinerary } from "../middlewares/userExitsByIdByItinerary.js";
import { schemaCreateUser } from "../schemas/user/register.js";
import { validator } from "../middlewares/validator.js";
import { userExistByEmail } from "../middlewares/userExistByEmail.js";
import { schemaUpdateAuth } from "../schemas/user/update.js";
import createHash from "../middlewares/createHash.js";

const router = Router();

router.get(
  "/all",
  // passport.authenticate("jwt", { session: false }),
  readUserAll
);
router.get(
  "/detail/:id",
  // passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadUser),
  userExistById,
  readUserId
);
router.get(
  "/itinerary/:id",
  // passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadUser),
  userExistByIdByItinerary,
  readUserItinerary
);


router.post("/create", validator(schemaCreateUser), userExistByEmail, createHash, register);
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadUser),
  userExistById,
  deleteUser
);
router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadUser),
  validator(schemaUpdateAuth),
  userExistById,
  updateUser
);

export default router;
