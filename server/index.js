const express = require('express');
const fs = require('fs');
const server = express();
//const routerAuth = require("./routes/auth.js");
const { getTask, getTaskIndex, createNewId, getDb } = require('./utils/utils');
const cors = require('cors');
server.use(cors());
// peticion -> middleware -> servidor

//get all tasks
server.use(express.json()); // middleware
//server.use(routerAuth); // middleware

// server.use("/api/tasks", (req, res, next) => {
//     if (req.ip === "192.168.20.50") {
//         next();
//     } else {
//         res.send("No puedes entrar");
//     }
// });

server.get('/api/tasks', (req, res)=>{
    res.status(200).json(getDb().tasks);
});

//get specific task
server.get('/api/tasks/:id', (req, res)=>{
    const {id} = req.params;
    const user = getTask(id);
    if(!user) {
       return res.sendStatus(404);
    }

    res.status(200).json(user);
});

//edit task
server.put('/api/tasks/:id', (req, res)=>{
    const {id} = req.params;
    const taskEdited = req.body;
    const taskIndex = getTaskIndex(id);
    const allTasks = db.tasks;
    if( taskIndex === -1  ) {
        return res.sendStatus(404);
    }
    allTasks[taskIndex] = taskEdited;
    fs.writeFile("./tasks.json", JSON.stringify(allTasks, null, 2), "utf8", (err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to save task" });
        }
        res.status(204).json(taskEdited);
    });
});

//create task
server.post('/api/tasks/create', (req,res) => {
    const newTask = req.body;
    const allTasks = getDb().tasks;
    const newId = createNewId();
    newTask.id = newId;
    allTasks.push(newTask)
    fs.writeFile("./tasks.json", JSON.stringify(allTasks, null, 2), "utf8", (err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to save task" });
        }
        res.status(200).json(newTask);
    });

})

server.listen('8080', console.log('server listening on 8080'))