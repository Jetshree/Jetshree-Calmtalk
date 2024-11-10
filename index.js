const express=require('express')
const mongoose=require('mongoose')
const auth=require('./routes/auth')
const app=express();

app.use(express.json())
app.use('/api/auth',auth)

app.listen(7000,()=>{
    console.log("hello im here")
})

mongoose.connect("mongodb://localhost:27017/CalmTalk")
.then(()=>{
    console.log("success")
    console.log("hello")
})
.catch(()=>{
    console.log("failed")
})

app.get('/',(req,res)=>{
    res.send("hello im server")
})