// Aufgabe3

// a) Welche Abteilungen haben keine Mitarbeiter? 


db.abt.aggregate([
  {
    $lookup: {
      from: "pers",
      localField: "_id",
      foreignField: "abteilung.$id",
      as: "mitarbeiter"
    }
  },
  {
    $match: {
      mitarbeiter: { $eq: [] }
    }
  }
])

// b) Wer hat einen Chef der jünger ist als er selbst? Vergleichen Sie die Anfrage mit einem äquivalenten SQL-Befehl. 

db.pers.aggregate([
  {
    $lookup: {
      from: "pers",
      localField: "vorgesetzter.$id",
      foreignField: "_id",
      as: "chef"
    }
  },
  {
    $unwind: "$chef"
  },
  {
    $match: {
      $expr: {
        $lt: ["$jahrg", "$chef.jahrg"]
      }
    }
  },
  {
    $project: {
      _id: 0,
      mitarbeiter: "$name",
      mitarbeiterJahrg: "$jahrg",
      chef: "$chef.name",
      chefJahrg: "$chef.jahrg"
    }
  }
])

// SELECT p1.name, p1.jahrg, p2.name, p2.jahrg
// FROM pers p1
// JOIN pers p2 ON p1.vorgesetzter = p2._id
// WHERE p1.jahrg < p2.jahrg

// c) 


db.pers.aggregate([
  {
    $group: {
      _id: "$abteilung.$id",
      avgJahrg: { $avg: "$jahrg" }
    }
  },
  {
    $sort: {
      avgJahrg: -1
    }
  },
  {
    $lookup: {
      from: "abt",
      localField: "_id",
      foreignField: "_id",
      as: "abt"
    }
  },
  {
    $unwind: "$abt"
  },
  {
    $project: {
      _id: 0, 
      anr: "$abt.anr",
      name: "$abt.name"
    }
  },
  {
    $limit: 1
  }
])