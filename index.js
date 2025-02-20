const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT
const DB_CONNECTION_LINK = process.env.DB_CONNECTION_LINK

const router=require("./routes/taskroutes")
const mongoose = require('mongoose');

mongoose.connect(DB_CONNECTION_LINK)
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
  console.log(error)
    console.log("db not connected")
})


app.use(express.json())
 app.use("/task",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})