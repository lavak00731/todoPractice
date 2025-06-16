const express = require('express');
const db = require('./tasks.json');
const fs = require('fs');
const server = express();
server.use(express.json());

server.get('/api/tasks', (req, res)=>{
    res.status(200).json(db)
})

server.listen('8080', console.log('server listening on 8080'))