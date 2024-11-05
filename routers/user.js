import { Router } from "express";
import {
  readUserAll,
  readUserId,
  readUserItinerary,
} from "../controllers/user/read.js";
import { createUser } from "../controllers/user/create.js";
import { deleteUser } from "../controllers/user/delete.js";
import { updateUser } from "../controllers/user/update.js";

const router = Router();

router.get("/all", readUserAll);
router.get("/detail/:id", readUserId);
router.get("/itinerary/:id", readUserItinerary);
router.post("/create", createUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

export default router;
