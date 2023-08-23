-- Remove comments to reset db
DROP TABLE kvitton;
-- How to reset db:
-- sqlite3 db.sqlite < init.sql

CREATE TABLE IF NOT EXISTS kvitton (
    refNummer VARCHAR(255) NOT NULL,
    kundnamn VARCHAR(255) NOT NULL,
    telefon VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,
    kategori VARCHAR(255) NOT NULL,
    fabrikat VARCHAR(255) NOT NULL,
    inDatum VARCHAR(255) NOT NULL,
    levDatum VARCHAR(255) NOT NULL,
    arbeten VARCHAR(255) NOT NULL,
    statusMeddelande VARCHAR(255) NOT NULL,
    notering VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    pris VARCHAR(255) NOT NULL,
    UNIQUE(refNummer)
);