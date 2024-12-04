import express from "express"
const app=express()
import {BACKEND_URL} from "@repo/common/config"
app.get("/",(req,res)=>{
    console.log(BACKEND_URL)
    res.json({
        message:"hello world from backend"
    })
})

app.listen(4000)