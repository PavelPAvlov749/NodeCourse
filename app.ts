require("dotenv").config()
require("./src/model/model")
import { Request,Response,Express as expressApp } from "express"
const express = require('express')
const seqielize  = require("./src/db")
const cors = require("cors")


const port = process.env.PORT || 8080

const app : expressApp =  express()

app.use(cors())
app.use(express.json())

app.get("/",(request : Request ,response : Response) => {
    response.status(200).json({message : "working"})
})

const start = async () => {
    try{    
        seqielize.authenticate()
        seqielize.sync()
        console.log(seqielize.modelManager.models[0])
        app.listen(port,() => {
            console.log(`Server started at ${[port]} port`)
            
        })
        
    }catch(ex) {
        console.log(ex)
    }
}


start()
