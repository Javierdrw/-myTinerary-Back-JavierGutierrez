import { Router } from "express";
import routerCity from "./city.js";
import routerItinerary from "./itinerary.js";
import routerUser from "./user.js";

const router = Router();

router.use("/city", routerCity);
router.use("/itinerary", routerItinerary);
router.use("/user", routerUser);

export default router;
