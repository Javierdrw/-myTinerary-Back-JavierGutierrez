import { Router } from "express";
import {
  readItinerariesCity,
  readItineraryAll,
  readItineraryId,
} from "../controllers/itinerary/read.js";
import { createItinerary } from "../controllers/itinerary/create.js";
import { deleteItinerary } from "../controllers/itinerary/delete.js";
import { updateItinerary } from "../controllers/itinerary/update.js";

const router = Router();

router.get("/all", readItineraryAll);
router.get("/detail/:_id", readItineraryId);
router.get("/city/:id", readItinerariesCity);
router.post("/create", createItinerary);
router.delete("/delete/:id", deleteItinerary);
router.put("/update/:id", updateItinerary);

export default router;
