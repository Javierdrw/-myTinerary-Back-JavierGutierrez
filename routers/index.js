import { Router } from "express";
import routerCity from "./city.js";
import routerItinerary from "./itinerary.js";
import routerUser from "./user.js";
import routerAuth from "./auth.js";

const router = Router();

router.use("/city", routerCity);
router.use("/itinerary", routerItinerary);
router.use("/user", routerUser);
router.use("/auth", routerAuth)

export default router;
