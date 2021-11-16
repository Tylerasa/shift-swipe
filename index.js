const express = require('express')
const app = express()
app.get('/', (req, res)=>{
    res.send("Welcome To The Landing Page")
})

app.listen(3000, ()=>{
    console.log('listening on PORT 3000')
})