import { Router } from "express";
import routerCity from "./city.js";

const router = Router();

router.use("/city", routerCity); 

export default router