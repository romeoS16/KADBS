// Aufgabe 3

// inserts

db.abt.insertMany([{"anr": "K51", "name": "Entwicklung", "ort": "Erlangen"},
 {"anr": "K53", "name": "Buchhaltung", "ort": "Nürnberg"},
 {"anr": "K54", "name": "Hochschule", "ort": "Konstanz"},
 {"anr": "K55", "name": "Personal", "ort": "Nürnberg"}])

db.pers.insertOne({"pnr":123, "name": "Mueller", "jahrg": 1980,
 "eindat": new Date("2000-09-01"), "gehalt": 88000, "beruf": "Kaufmann",
 "abteilung": new DBRef("abt", db.abt.findOne({"name": "Entwicklung"})._id)})
db.pers.insertOne({"pnr": 406, "name": "Coy", "jahrg": 1972,
 "eindat": new Date("2006-09-01"), "gehalt": 100000, "beruf": "Programmierer",
 "vorgesetzter": new DBRef("pers", db.pers.findOne({"name": "Mueller"})._id),
 "abteilung": new DBRef("abt", db.abt.findOne({"name": "Personal"})._id)})
db.pers.insertOne({"pnr": 829, "name": "Schmidt", "jahrg": 1982,
 "eindat": new Date("2010-06-01"), "gehalt": 94000, "beruf": "Kaufmann",
 "vorgesetzter": new DBRef("pers", db.pers.findOne({"name": "Mueller"})._id),
 "abteilung": new DBRef("abt", db.abt.findOne({"name": "Buchhaltung"})._id)})
db.pers.insertOne({"pnr": 874, "name": "Abel",
 "eindat": new Date("2014-05-01"), "gehalt": 82000, "beruf": "Softw.Entwickler",
 "vorgesetzter": new DBRef("pers", db.pers.findOne({"name": "Schmidt"})._id),
 "abteilung": new DBRef("abt", db.abt.findOne({"name": "Personal"})._id)})

db.pers.insertOne({"pnr": 503, "name": "Junghans", "jahrg": 1997,
 "gehalt": 80000, "beruf": "Programmierer",
 "vorgesetzter": new DBRef("pers", db.pers.findOne({"name": "Mueller"})._id),
 "abteilung": new DBRef("abt", db.abt.findOne({"name": "Entwicklung"})._id)}) 


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

// c) Welche Abteilung hat durchschnittlich die jüngsten Mitarbeiter? Es sollen nur die Abteilungsnummer und der Abteilungsname ausgegeben werden. 


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