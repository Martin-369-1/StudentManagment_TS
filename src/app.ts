import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config()

const app=express();
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})