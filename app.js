const express = require('express')
const boddParser = require('body-parser')
const  getProductAPI = require('./routes/getProductAPI')

const app = express()
const port = 5001;

// parse applicaton form=urlencoded
app.use(boddParser.urlencoded({extended:false}))
//parse application json
app.use(boddParser.json())

app.use('/',getProductAPI);



//listener
app.listen(port,()=>{
    console.log('the server is running ' +port)
})