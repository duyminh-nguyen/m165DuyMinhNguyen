// Verwenden Sie mindestens einmal eine Filterung auf ein DateTime Feld
db.game.find({
    Release_Year: {
        $gte: ISODate("2016-01-01"),  // Beispiel: Suchen nach Spielen ab dem 1. Januar 2016
        $lt: ISODate("2017-01-01")    // Beispiel: Suchen nach Spielen vor dem 1. Januar 2017
    }
});

// Verwenden Sie mindestens einmal eine ODER-Verknüpfung in der Filterung
db.character.find({
    $or: [
        { First_Name: "Cloud" },
        { Species: "Cetra" }
    ]
});

// Verwenden Sie mindestens einmal eine UND-Verknüpfung in der Filterung, aber nicht auf der gleichen Collection wie die ODER-Verknüpfung
db.weapon.find({
    Type: "Sword",
    $or: [
        { Name: "Gunblade" },
        { Name: "Engine Blade" }
    ]
});

// Verwenden Sie mindestens einmal eine Regex um einen Teilstring zu finden
db.character.find({
    First_Name: { $regex: "L", $options: "i" }  // Beispiel: Suchen nach Charakteren mit einem Vornamen, der den Buchstaben "L" enthält
});

// Verwenden Sie mindestens einmal eine Projektion, bei der die _id auch ausgegeben wird
db.weapon.find({}, {
    _id: 1,
    Name: 1,
    Type: 1
});

// Verwenden Sie mindestens einmal eine Projektion, bei der die _id nicht ausgegeben wird
db.character.find({}, {
    _id: 0,
    First_Name: 1,
    Last_Name: 1,
    Species: 1
});
