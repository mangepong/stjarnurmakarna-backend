var express = require("express");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/db.sqlite");

router.post("/", function (req, res) {
    let kundnamn = req.body.kundnamn;
    let sql = "SELECT * FROM kvitton WHERE kundnamn LIKE ?";

    db.all(sql, ['%' + kundnamn + '%'], (err, data) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                data: {
                    msg: "Could not get any kvitton!"
                }
            });
        } else {
            res.json({data});
            console.log(data);
        }
    });
});

module.exports = router;
