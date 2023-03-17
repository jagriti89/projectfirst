const express=require("express")
const bodyparser=require ("body-parser")
const app=express()
const route =require('./routes/route.js')
 const mongoose=require("mongoose")
 app.use(bodyparser.json())
 app.use(bodyparser.urlencoded({extended:true}))

 mongoose.connect("mongodb+srv://jagriti:Jaggu123@cluster0.nf3nfa7.mongodb.net/jaggu/blogmanagement",{
useNewUrlParser:true
 })

 .then(()=>console.log("connected"))
 .catch(err=> console.log(err.msg))

 app.use("/",route)
 app.listen(process.env.PORT || 3000, function(){
    console.log("running at "+(process.env.PORT||3000))
 })
