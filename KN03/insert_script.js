// This Defines ObjectIds for characters, games, weapons, and developers
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

var developer1Id = new ObjectId();
var developer2Id = new ObjectId();
var developer3Id = new ObjectId();
var developer4Id = new ObjectId();
var developer5Id = new ObjectId();

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

// This Inserts games into the 'game' collection, including developers
db.game.insertMany([
    {
        _id: ff7Id,
        Game_ID: 1,
        Title: "Final Fantasy VII",
        Release_Year: ISODate("1997-01-31"),
        Developers: [
            { _id: developer1Id, Name: "Square" }
        ]
    },
    {
        _id: ff13Id,
        Game_ID: 2,
        Title: "Final Fantasy XIII",
        Release_Year: ISODate("2009-12-17"),
        Developers: [
            { _id: developer2Id, Name: "Square Enix" }
        ]
    },
    {
        _id: ff15Id,
        Game_ID: 3,
        Title: "Final Fantasy XV",
        Release_Year: ISODate("2016-11-29"),
        Developers: [
            { _id: developer3Id, Name: "Square Enix" }
        ]
    },
    {
        _id: ff10Id,
        Game_ID: 4,
        Title: "Final Fantasy X",
        Release_Year: ISODate("2001-07-19"),
        Developers: [
            { _id: developer4Id, Name: "Square" },
            { _id: developer5Id, Name: "Square Enix" }
        ]
    }
]);

// This Inserts characters into the 'character' collection, including main_weapon
db.character.insertOne({
    _id: cloudId,
    First_Name: "Cloud",
    Last_Name: "",
    Species: "Human",
    Game: ff7Id,
    main_weapon: busterSwordId
});

db.character.insertOne({
    _id: aerithId,
    First_Name: "Aerith",
    Last_Name: "",
    Species: "Cetra",
    Game: ff7Id,
    main_weapon: staffId
});

db.character.insertOne({
    _id: lightningId,
    First_Name: "Lightning",
    Last_Name: "Farron",
    Species: "Human",
    Game: ff13Id,
    main_weapon: gunbladeId
});

db.character.insertOne({
    _id: noctisId,
    First_Name: "Noctis",
    Last_Name: "Lucis Caelum",
    Species: "Human",
    Game: ff15Id,
    main_weapon: engineBladeId
});

db.character.insertOne({
    _id: tidusId,
    First_Name: "Tidus",
    Last_Name: "",
    Species: "Human",
    Game: ff10Id,
    main_weapon: brotherhoodId
});
