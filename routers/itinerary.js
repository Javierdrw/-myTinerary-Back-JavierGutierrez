import { Router } from "express";
import {
  readItinerariesCity,
  readItineraryAll,
  readItineraryId,
} from "../controllers/itinerary/read.js";
import { createItinerary } from "../controllers/itinerary/create.js";
import { deleteItinerary } from "../controllers/itinerary/delete.js";
import { updateItinerary } from "../controllers/itinerary/update.js";
import passport from "../middlewares/passport.js";
import { validatorParams } from "../middlewares/validator.js";
import { schemaReadItinerary } from "../schemas/itinerary/read.js";
import { itineraryExistById } from "../middlewares/itineraryExistById.js";
import { schemaCreateItinerary } from "../schemas/itinerary/create.js";
import { validator } from "../middlewares/validator.js";
import { schemaUpdateItinerary } from "../schemas/itinerary/update.js";
import { itineraryExistByIdByCity } from "../middlewares/itineraryExistByIdByCity.js";

const router = Router();

router.get(
  "/all",
  // passport.authenticate("jwt", { session: false }),
  readItineraryAll
);
router.get(
  "/detail/:id",
  // passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadItinerary),
  itineraryExistById,
  readItineraryId
);
router.get(
  "/city/:id",
  // passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadItinerary),
  itineraryExistByIdByCity,
  readItinerariesCity
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validator(schemaCreateItinerary),
  createItinerary
);
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadItinerary),
  itineraryExistById,
  deleteItinerary
);
router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  validatorParams(schemaReadItinerary),
  validator(schemaUpdateItinerary),
  itineraryExistById,
  updateItinerary
);

export default router;
