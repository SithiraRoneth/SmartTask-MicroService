// @ts-ignore
import express from 'express';
import mongoose from "mongoose";
import AuthController, {authenticationToken} from "./controller/AuthController";

const app = express();
const mongoUrl = "mongodb://localhost:27017/Note-Collector";

mongoose
    .connect(mongoUrl)
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch((err:any)=> console.log("MongoDB Connection Error :",err))


app.use("/auth",AuthController);
app.use(authenticationToken);

app.listen(3000,()=>{
    console.log("Server running port 3000");
});