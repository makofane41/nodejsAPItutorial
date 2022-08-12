const express = require('express')
const mysql = require('mysql')
const getProductAPI = express.Router();

const pool = mysql.createPool({
    connectionLimit:10,
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'ecommerce'
})

getProductAPI.get('/products',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err

        connection.query('select * from products',(err,rows)=>{
            connection.release()
            if(!err){
                res.send(rows)
            }else(
                res.send(err)
            )

            console.log('The list of products')
        })
    })
})

module.exports = getProductAPI;