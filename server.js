const express = require('express');

const mongoose = require('mongoose');

const {connectdb} = require('./connect');

app=express()

app.get('/api/',(req,res)=>{
    res.send("Ayush")
})

connectdb()
.then(()=>{
    console.log('Database has been connected')})
.catch(()=>{
    console.log('Failed to connect Database');});