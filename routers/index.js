import { Router } from "express";

const router = Router();

router.get("/api", (req, res) => {
    res.send("Hello")
}) 

export default router