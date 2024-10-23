import { Router } from "express";
import { allCities, detailCity } from "../controllers/city/read.js";
import { updateCity } from "../controllers/city/update.js";
import { deleteCity } from "../controllers/city/delete.js";
import { createCity } from "../controllers/city/create.js";

const router = Router();

router.get("/all", allCities)
router.get("/detail/:_id", detailCity)
router.put("/update/:_id", updateCity); 
router.delete("/delete/:_id", deleteCity);
router.post("/create", createCity);

export default router