const express = require('express')
const app = express()
app.get('/', (req, res)=>{
    res.send("Welcome To The Landing Page")
})
var port = process.env.port || 3000
app.listen(port, ()=>{
    console.log('listening on PORT 3000')
})