var express = require("express");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/db.sqlite");

router.post("/", function (req, res) {
    console.log("Inskick");
    var refNummer = req.body.model.refNummer;
    var kundnamn = req.body.model.kundnamn ? req.body.model.kundnamn : "";
    var telefon = req.body.model.telefon ? req.body.model.telefon : "";
    var adress = req.body.model.adress ? req.body.model.adress : "";
    var kategori = req.body.model.kategori ? req.body.model.kategori : "";
    var fabrikat = req.body.model.fabrikat ? req.body.model.fabrikat : "";
    var inDatum = req.body.model.inDatum ? req.body.model.inDatum : "";
    var levDatum = req.body.model.levDatum ? req.body.model.levDatum : "";
    var arbeten = req.body.model.arbeten ? req.body.model.arbeten : [""];
    var statusMeddelande = req.body.model.statusMeddelande ? req.body.model.statusMeddelande : "";
    var notering = req.body.model.notering ? req.body.model.notering : "";
    var status = req.body.model.status ? req.body.model.status : "";
    var pris = req.body.model.pris ? req.body.model.pris : "";

    let arbetenTemp = [];
    for (let i = 0; i < arbeten.length; i++) {
        arbetenTemp.push(arbeten[i].name)
    }

    let arbetenString = arbetenTemp.join();


    var data = [
        refNummer,
        kundnamn,
        telefon,
        adress,
        kategori,
        fabrikat,
        inDatum,
        levDatum,
        arbetenString,
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
