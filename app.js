const express = require('express');
const app = express();
const taskRouter = require('./src/routes/taskRouter');
app.use(express.json());
app.use(express.static(__dirname + './public'));
//implement routes
app.use('/api/v0/task', taskRouter);

module.exports = app;
