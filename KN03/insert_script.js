// This Defines ObjectIds for characters, games, and weapons
var cloudId = new ObjectId();
var aerithId = new ObjectId();
var lightningId = new ObjectId();
var noctisId = new ObjectId();
var tidusId = new ObjectId();

var busterSwordId = new ObjectId();
var staffId = new ObjectId();
var gunbladeId = new ObjectId();
var engineBladeId = new ObjectId();
var brotherhoodId = new ObjectId();

var ff7Id = new ObjectId();
var ff13Id = new ObjectId();
var ff15Id = new ObjectId();
var ff10Id = new ObjectId(); 

// This Inserts weapons into the 'weapon' collection
db.weapon.insertMany([
    {
        _id: busterSwordId,
        Name: "Buster Sword",
        Type: "Greatsword"
    },
    {
        _id: staffId,
        Name: "Staff",
        Type: "Staff"
    },
    {
        _id: gunbladeId,
        Name: "Gunblade",
        Type: "Sword"
    },
    {
        _id: engineBladeId,
        Name: "Engine Blade",
        Type: "Sword"
    },
    {
        _id: brotherhoodId,
        Name: "Brotherhood",
        Type: "Sword"
    }
]);

// This Inserts games into the 'game' collection
db.game.insertMany([
    {
        _id: ff7Id,
        Game_ID: 1,
        Title: "Final Fantasy VII",
        Release_Year: ISODate("1997-01-31")
    },
    {
        _id: ff13Id,
        Game_ID: 2,
        Title: "Final Fantasy XIII",
        Release_Year: ISODate("2009-12-17")
    },
    {
        _id: ff15Id,
        Game_ID: 3,
        Title: "Final Fantasy XV",
        Release_Year: ISODate("2016-11-29")
    },
    {
        _id: ff10Id,
        Game_ID: 4,
        Title: "Final Fantasy X",
        Release_Year: ISODate("2001-07-19")
    }
]);

// This Inserts characters into the 'character' collection
db.character.insertMany([
    {
        _id: cloudId,
        First_Name: "Cloud",
        Last_Name: "",
        Species: "Human",
        Game: ff7Id
    },
    {
        _id: aerithId,
        First_Name: "Aerith",
        Last_Name: "",
        Species: "Cetra",
        Game: ff7Id
    },
    {
        _id: lightningId,
        First_Name: "Lightning",
        Last_Name: "Farron",
        Species: "Human",
        Game: ff13Id
    },
    {
        _id: noctisId,
        First_Name: "Noctis",
        Last_Name: "Lucis Caelum",
        Species: "Human",
        Game: ff15Id
    },
    {
        _id: tidusId,
        First_Name: "Tidus",
        Last_Name: "",
        Species: "Human",
        Game: ff10Id
    }
]);

// This Links characters to their main weapons
db.character.updateOne({ _id: cloudId }, { $set: { main_weapon: [busterSwordId] } });
db.character.updateOne({ _id: aerithId }, { $set: { main_weapon: [staffId] } });
db.character.updateOne({ _id: lightningId }, { $set: { main_weapon: [gunbladeId] } });
db.character.updateOne({ _id: noctisId }, { $set: { main_weapon: [engineBladeId] } });
db.character.updateOne({ _id: tidusId }, { $set: { main_weapon: [brotherhoodId] } });
