const express=require("express")
const app=express()

require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/login",(req,res)=>{
    res.send("<h1>this is login page</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log("port is running")
})


console.log("Chai aur code")