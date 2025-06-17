const db = require('./../tasks.json');
const getUser = id =>  db.tasks.find(task => task.id === parseInt(id));

module.exports = {
    getUser: getUser
}