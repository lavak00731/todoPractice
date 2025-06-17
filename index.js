const express = require('express');
const db = require('./tasks.json');
const fs = require('fs');
const server = express();
server.use(express.json());

const { getUser } = require('./utils/utils');

//get all tasks
server.get('/api/tasks', (req, res)=>{
    res.status(200).json(db);
});

//get specific task
server.get('/api/tasks/:id', (req, res)=>{
    const {id} = req.params;
    const user = getUser(id);
    if(!user) {
        res.sendStatus(404);
    }
    res.status(200).json(user);
});

//edit task
server.put('/api/tasks/:id', (req, res)=>{
    const {id} = req.params;
    const userEdited = req.body;
    const user = getUser(id);
    if(!user) {
        res.sendStatus(404);
    }
    

})


server.listen('8080', console.log('server listening on 8080'))