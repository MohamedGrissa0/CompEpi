const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));
  mongoose.connect(process.env.MONGO_URL).then(console.log("DATABASE CONNECTED")).catch(err => {console.log(err)})













  app.get('/', async function(req,res)
  {
      res.send('welcome to dashboard backend')
  })
  
  
  
  
  
  
  
  app.listen(4000,function()
  {
      console.log("Port 4OOO is running ")
  }
  )
  