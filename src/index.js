import connectDB from "../db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

// (alias) const app: Express
// import app

dotenv.config({
    path: './.env' //because file name is .env
})

connectDB().
then(()=>{
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
      });
}).
catch((error)=>{
    console.error("Error in MongoDB starting Server", error)
})
// We need to tackle error always to debug properly