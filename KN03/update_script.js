// updateOne() mit _id als Filterung
db.weapon.updateOne(
    { _id: ObjectId("5fde124de6c41e67711e5912") },
    { $set: { Type: "Greatsword" } }
);

// updateMany() ohne _id, mit einer ODER-Verknüpfung
db.character.updateMany(
    {
        $or: [
            { First_Name: "Cloud" },
            { Species: "Human" }
        ]
    },
    { $set: { Species: "SOLDIER" } }
);

// replaceOne(), um ein Dokument zu ersetzen
db.game.replaceOne(
    { Title: "Final Fantasy X" },
    {
        Game_ID: 4,
        Title: "Final Fantasy X",
        Release_Year: ISODate("2001-07-19")
    }
);
