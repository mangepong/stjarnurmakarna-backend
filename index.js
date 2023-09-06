const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const index = require("./routes/index");
const create = require("./routes/create");
const getRef = require("./routes/getRef");
const getAll = require("./routes/getAll");
const getSpecific = require("./routes/getSpecific");
const getSpecificCustomer = require("./routes/getSpecificCustomer");
const getSpecificPhone = require("./routes/getSpecificPhone");
const getSpecificFabrikat = require("./routes/getSpecificFabrikat");
const getSpecificNote = require("./routes/getSpecificNote");

const update = require("./routes/update");

const server = require("http").createServer(app);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/db.sqlite");

app.use(cors());
if (process.env.NODE_ENV !== "test") {
    // use morgan to log at command line
    app.use(morgan("combined")); // 'combined' outputs the Apache style LOGs
}
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", index);
app.use("/create", create);
app.use("/getRefNumber", getRef);
app.use("/getAll", getAll);
app.use("/getSpecific", getSpecific);
app.use("/getSpecificCustomer", getSpecificCustomer);
app.use("/getSpecificPhone", getSpecificPhone);
app.use("/getSpecificFabrikat", getSpecificFabrikat);
app.use("/getSpecificNote", getSpecificNote);
app.use("/update", update);

server.listen(port, () =>
    console.log(`Backend API listening on port ${port}!`)
);
// Start up server
// var server = app.listen(port, () => console.log(`Backend API listening on port ${port}!`));

module.exports = server;
