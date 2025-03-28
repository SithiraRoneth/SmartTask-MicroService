// @ts-ignore
import express from 'express';
import mongoose from "mongoose";
import AuthController, {authenticationToken} from "./controller/AuthController";
import {Eureka} from 'eureka-js-client';

const app = express();
const mongoUrl = "mongodb://localhost:27017/Smart-TaskManager";
const eurekaClient = new Eureka({
    instance:{
        instanceId: "auth-service",
        app:"AUTH-SERVICE",
        hostName:"location",
        ipAddr: "127.0.0.1",
        port:{
            $:3000,
            "@enabled":true
        },
        vipAddress: "auth-service",
        dataCenterInfo:{
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn"
        }
    },
    eureka:{
        host:"localhost",
        port:8761,
        //servicePath:"/eureka/"
    }
})
mongoose
    .connect(mongoUrl)
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch((err:any)=> console.log("MongoDB Connection Error :",err))


app.use("/auth",AuthController);
app.use(authenticationToken);

app.listen(3000,()=>{
    console.log("Server running port 3000");

    eurekaClient.start((error) => {
        if (error) {
            console.log("Fail to register eureka")
        } else {
            console.log("successfully registered with Eureka")
        }
    })
});