const express = require('express')
require('dotenv').config;

const app = express();

app.get('/',(req,res)=>{
    res.send("dekh ansh bhusdk");
})

app.listen(process.env.port||8080);