var express = require("express");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/db.sqlite");

router.get("/", function (req, res) {
    console.log("Get refnr");
    // let sql = "SELECT COUNT(*) FROM kvitton";
    let sql = "SELECT MAX(refNummer) FROM kvitton";


    db.all(sql, (err, amount) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                data: {
                    msg: "Could not get ref number!"
                }
            });
        } else {
            var refNr = parseInt(amount[0]["MAX(refNummer)"]) + 1;
            res.json({refNummer: refNr});
        }
    });
});

module.exports = router;
