var express = require("express");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/db.sqlite");

router.post("/", function (req, res) {
    console.log("Get a kvitto");
    console.log(req.body);
    let refNr = req.body.refNr;
    let sql = "SELECT * FROM kvitton WHERE refNummer LIKE ?";
    
    db.all(sql, [refNr], (err, data) => {
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
