const fs = require('fs');
const path = require('path');
const getDb = () => JSON.parse(fs.readFileSync(path.join(__dirname, '../tasks.json'), 'utf8'));

const getTask = id =>  getDb().tasks.find(task => task.id === parseInt(id));
const getTaskIndex = id => getDb().tasks.findIndex(task => task.id === parseInt(id))
const createNewId = () => {
    const tasks = getDb().tasks;
    if (!tasks || tasks.length === 0) return 1;
    return Math.max(...tasks.map(task => task.id)) + 1;
};

module.exports = {
    getTask,
    getTaskIndex,
    createNewId,
    getDb
}