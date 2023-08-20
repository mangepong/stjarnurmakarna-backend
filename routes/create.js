var express = require("express");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/db.sqlite");

router.post("/", function (req, res) {
    console.log("Inskick");
    var refNummer = req.body.refNummer;
    var kundnamn = req.body.kundnamn;
    var telefon = req.body.telefon;
    var adress = req.body.adress;
    var kategori = req.body.kategori;
    var fabrikat = req.body.fabrikat;
    var inDatum = req.body.inDatum;
    var levDatum = req.body.levDatum;
    var arbeten = req.body.arbeten;
    var statusMeddelande = req.body.statusMeddelande;
    var notering = req.body.notering;
    var status = req.body.status;
    var pris = req.body.pris;

    var data = [
        refNummer,
        kundnamn,
        telefon,
        adress,
        kategori,
        fabrikat,
        inDatum,
        levDatum,
        arbeten,
        statusMeddelande,
        notering,
        status,
        pris
    ];
    let sql =
        "INSERT INTO kvitton (refNummer, kundnamn, telefon, adress, kategori, fabrikat, inDatum, levDatum, arbeten, statusMeddelande, notering, status, pris) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.run(sql, data, function (err) {
        if (err) {
            console.log("ERROR");
            console.log(err);
            res.status(400).json({
                data: {
                    msg: "Could not add object",
                },
            });
        } else {
            res.status(201).json({
                data: {
                    msg: "Object added!",
                },
            });
        }
    });
});

module.exports = router;
