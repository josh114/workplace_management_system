const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRouter = require('./src/routes/taskRouter');
const userRouter = require('./src/routes/userRouter');
const cors = require('cors');
app.use(express.json());
app.use(express.static(__dirname + './public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
  })
);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //   console.log(req.headers);

  next();
});

//implement routes
app.use('/api/v0/task', taskRouter);
app.use('/api/v0/user', userRouter);

module.exports = app;
