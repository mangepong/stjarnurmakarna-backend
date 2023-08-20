const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;
const index = require('./routes/index');
const create = require('./routes/create');
// const register = require('./routes/register');
// const login = require('./routes/login');
// const username = require('./routes/username');
// const deposit = require('./routes/deposit');
// const funds = require('./routes/funds');
// const objects = require('./routes/get-object');
// const buy = require('./routes/bought-obj');
// const myobjects = require('./routes/my-objects');
// const deleteHistory = require('./routes/delete-history');
const server = require('http').createServer(app);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');

app.use(cors());
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/create', create);
// app.use('/register', register);
// app.use('/login', login);
// app.use('/username', username);
// app.use('/deposit', deposit);
// app.use('/funds', funds);
// app.use('/objects', objects);
// app.use('/buy', buy);
// app.use('/myobjects', myobjects);
// app.use('/delete', deleteHistory);



server.listen(port, () => console.log(`Backend API listening on port ${port}!`));
// Start up server
// var server = app.listen(port, () => console.log(`Backend API listening on port ${port}!`));

module.exports = server;