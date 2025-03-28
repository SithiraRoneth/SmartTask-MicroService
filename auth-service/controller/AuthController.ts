// @ts-ignore
import express from "express";
import {SaveAuth} from "../service/AuthService";

const router = express.Router();

router.post('/addUser', async (req,res)=>{
    const auth = req.body;
    try{
        const added = SaveAuth(auth);
        res.status(201).json({success:true, auth:added});
    }catch (err){
        console.log("Error during user :", err);
    }
});


export default router;