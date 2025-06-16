const express = require('express');
const db = require('./tasks.json');
const fs = require('fs');
const server = express();
server.use(express.json());

//get all tasks
server.get('/api/tasks', (req, res)=>{
    res.status(200).json(db)
});

//get specific task
server.get('/api/tasks/:id', (req, res)=>{
    const param  = req.params;
    const user = db.tasks.find(task => task.id === parseInt(param.id))
    if(!user) {
        res.sendStatus(404);
    }
    res.status(200).json(user);
});


server.listen('8080', console.log('server listening on 8080'))