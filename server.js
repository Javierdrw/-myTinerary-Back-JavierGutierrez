import express from "express";
import "dotenv/config.js";
import "./config/dataBase.js";
import cors from "cors";
import morgan from "morgan";
import router from "./routers/index.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import error500_handler from "./middlewares/error_handler.js";

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => {
    console.log(`Server on port ${PORT}`);
}

console.log("URL of MongoDB: ", process.env.URL_MONGO);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"))
server.use("/api", router);
server.listen(PORT, ready);
server.use(not_found_handler)
server.use(error500_handler)
