import { Router } from "express";
import { allCities, detailCity } from "../controllers/city/read.js";
import { updateCity } from "../controllers/city/update.js";
import { deleteCity } from "../controllers/city/delete.js";
import { createCity } from "../controllers/city/create.js";
import { city_verifique_handler } from "../middlewares/city_verifique_handler.js";
import passport from "../middlewares/passport.js";
import { validator, validatorParams } from "../middlewares/validator.js";
import { schemaCreateCity } from "../schemas/city/create.js";
import { schemaReadCity } from "../schemas/city/delete.js";
import { CityExistById } from "../middlewares/CityExistById.js";
import { schemaUpdateCity } from "../schemas/city/update.js";

const router = Router();

router.get(
  "/all",
   allCities
  );

router.get(
  "/detail/:_id",
  // passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadCity),
  CityExistById,
  detailCity
);

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validator(schemaCreateCity),
  city_verifique_handler,
  createCity
);
router.delete(
  "/delete/:_id",
  passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadCity),
  CityExistById,
  deleteCity
);
router.put(
  "/update/:_id",
  passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadCity),
  validator(schemaUpdateCity),
  CityExistById,
  updateCity
);

export default router;
