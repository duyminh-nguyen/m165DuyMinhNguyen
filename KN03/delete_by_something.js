db.game.deleteOne({ "_id": ObjectId("667977f9dd4d83f40cfaee2a") });

db.character.deleteMany({ 
    $or: [
        { _id: ObjectId("667977f9dd4d83f40cfaee20") }, 
        { _id: ObjectId("667977f9dd4d83f40cfaee21") }
    ] 
});