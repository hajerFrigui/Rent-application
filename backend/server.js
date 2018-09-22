const express = require ('express')
const{MongoClient,ObjectId}=require('mongodb')
const bodyparser= require ('body-parser')
const app = express()
const assert =require('assert')
app.use(bodyparser.json())




const mongo_url='localhost:27017'
const database='rent-app'
/*connexion*/
MongoClient.connect(mongo_url,(err,client)=>{
    assert.equal(err,null,'database connexion failed')
    const db = client(database)



})


/*create server*/
app.listen(3000,(err)=>{
    if (err) console.log('server err')
    else console.log('server is runing')
})