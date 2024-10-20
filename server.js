import express from "express";
import "dotenv/config.js";
import "./config/dataBase.js";
import cors from "cors";
import morgan from "morgan";
import router from "./routers/index.js";

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
