import connectDB from "../db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env' //because file name is .env
})

connectDB()