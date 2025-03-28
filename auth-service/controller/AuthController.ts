// @ts-ignore
import express from "express";
import {SaveAuth, verifyAuth} from "../service/AuthService";
import {AuthModel} from "../model/AuthModel";
// @ts-ignore
import jwt,{Secret} from 'jsonwebtoken'
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
router.post('/login', async (req,res)=>{
    console.log("Login Info :",req.body);
    const email = req.body.email;
    const password = req.body.password;

    const auth:Partial<AuthModel> = {email,password};
    try{
        const isVerified = await verifyAuth(auth);
        if (isVerified){
            const access_token =jwt.sign({email},process.env.ACCESS_TOKEN as Secret,{expiresIn:"1m"})
            const refresh_token =jwt.sign({email},process.env.REFRESH_TOKEN as Secret,{expiresIn:"7d"})
            res.status(201).json({access_token:access_token,refresh_token:refresh_token});
        }else {
            res.status(404).json({success:false,message:"User Credential Invalid"});
        }
    }catch (err){
        console.log("Error Verify User");
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
});

router.post("/refresh-token", async (req, res) => {
    const authHeader = req.headers.authorization;
    const refresh_token = authHeader?.split(' ')[1];

    if(!refresh_token)res.status(401).send('No token provided');

    try{
        const payload = jwt.verify(refresh_token as string, process.env.REFRESH_TOKEN as Secret) as {username: string, iat: number};
        const token = jwt.sign({ username: payload.username }, process.env.ACCESS_TOKEN as Secret, {expiresIn: "1m"});
        res.json({accessToken : token});
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
});

export function authenticationToken(req:express.Request,res:express.Response,next:express.NextFunction){
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    console.log(token)
    if (!token) res.status(401).send("Token not provided");

    try{
        const payload = jwt.verify(token as string, process.env.ACCESS_TOKEN as Secret) as {username:string, iat:number};
        console.log(payload.username);
        req.body.username = payload.username;
        next();
    }catch (err){
        res.status(401).send(err);
    }
}

export default router;