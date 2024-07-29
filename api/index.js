import express from "express";
import mongoose from "mongoose";

import 'dotenv/config'
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World! 👻')
})


//======== conect DB ========//
const port = process.env.PORT ;
const dbUrl = process.env.DB_URL ;

mongoose.connect(dbUrl)
  .then(() => {
    console.log('Bd is conected');
    app.listen(port || 4000 , () => {
      console.log(`Example app listening on port ${port}`)
    })
   }).catch((err)=>{
    console.log(err)
  });