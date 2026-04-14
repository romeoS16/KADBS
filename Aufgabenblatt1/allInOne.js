// Aufgabe 1

db.createCollection("studiengang", {
    validator: {
        $jsonSchema: {
            bsonType: "object", 
            required: [ "name", "kuerzel", "abschluss" ],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                kuerzel: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                abschluss: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
            
        }
    }
})


db.createCollection("vorlesung", {
    validator: {
        $jsonSchema: {
            bsonType: "object", 
            required: [ "name", "dozent", "semester", "studiengang", "sws", "ects" ],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                dozent: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                semester: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 12,
                    description: "must be an integer in the range 1-12 and is required"
                },
                studiengang: {
                    bsonType: "object",
                    description: "must be an ObjectId referencing a studiengang and is required"
                },
                sws: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 50,
                    description: "must be an integer in the range 1-50 and is required"
                },
                ects: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 30,
                    description: "must be an integer in the range 1-30 and is required"
                }
            }   
        }
    }
})


db.studiengang.insertMany([
    {
        name: "Angewandte Informatik",
        kuerzel: "AIN",
        abschluss: "Bachelor"
    },
    {
        name: "Wirtschaftsinformatik",
        kuerzel: "WIN",
        abschluss: "Bachelor"
    },
    {
        name: "Gesundheitsinformatik",
        kuerzel: "GIB",
        abschluss: "Bachelor"
    },
    {
        name: "Informatik",
        kuerzel: "MSI",
        abschluss: "Master"
    }
])


// Insert Vorlesung von WIN

const win = db.studiengang.findOne({ kuerzel: "WIN" })

db.vorlesung.insertMany([
    {
        name: "Mathematik für Wirtschaftsinformatiker 1",
        dozent: "Prof. Dr. Bohnet",
        semester: 1,
        studiengang: DBRef("studiengang", win._id),
        sws: 5,
        ects: 6
    },
    {
        name: "Mathematik für Wirtschaftsinformatiker 2",
        dozent: "Prof. Dr. Bohnet",
        semester: 2,
        studiengang: DBRef("studiengang", win._id),
        sws: 5,
        ects: 6
    },
    {
        name: "Software Engineering 1",
        dozent: "Prof. Dr. Schneider",
        semester: 3,
        studiengang: DBRef("studiengang", win._id),
        sws: 4,
        ects: 6
    },
    {
        name: "Software Engineering 2",
        dozent: "Koschnick",
        semester: 4,
        studiengang: DBRef("studiengang", win._id),
        sws: 4,
        ects: 5
    },
    {
        name: "IT-Projektmanagement",
        dozent: "Bilger",
        semester: 6,
        studiengang: DBRef("studiengang", win._id),
        sws: 4,
        ects: 5
    },
    {
        name: "Datenbanken und Informationssysteme 1",
        dozent: "Prof. Dr.-Ing. Wäsch",
        semester: 3,
        studiengang: DBRef("studiengang", win._id),
        sws: 6,
        ects: 7
    },
    {
        name: "Datenbanken und Informationssysteme 2",
        dozent: "Prof. Dr.-Ing. Wäsch",
        semester: 4,
        studiengang: DBRef("studiengang", win._id),
        sws: 4,
        ects: 5
    },
    {
        name: "Controlling",
        dozent: "Prof. Dr. Rentrop",
        semester: 5,
        studiengang: DBRef("studiengang", win._id),
        sws: 2,
        ects: 3
    },
    {
        name: "Betriebswirtschaftslehre 1",
        dozent: "Prof. Dr. Rentrop",
        semester: 1,
        studiengang: DBRef("studiengang", win._id),
        sws: 3,
        ects: 4
    },
    {
        name: "Betriebliche Anwendungen 1",
        dozent: "Prof. Dr. Hoffmann",
        semester: 7,
        studiengang: DBRef("studiengang", win._id),
        sws: 4,
        ects: 6
    }
])

// Insert Vorlesung von AIN

const ain = db.studiengang.findOne({ kuerzel: "AIN" })


db.vorlesung.insertMany([
  {
    name: "Digitaltechnik",
    dozent: "Prof. Dr. Weber",
    semester: 1,
    studiengang: DBRef("studiengang", ain._id),
    sws: 6,
    ects: 6
  },
  {
    name: "Programmiertechnik 1",
    dozent: "Prof. Dr. Keller",
    semester: 1,
    studiengang: DBRef("studiengang", ain._id),
    sws: 6,
    ects: 6
  },
  {
    name: "Programmiertechnik 2",
    dozent: "Prof. Dr. Schneider",
    semester: 2,
    studiengang: DBRef("studiengang", ain._id),
    sws: 6,
    ects: 6
  },
  {
    name: "Rechnerarchitekturen",
    dozent: "Prof. Dr. Braun",
    semester: 2,
    studiengang: DBRef("studiengang", ain._id),
    sws: 5,
    ects: 5
  },
  {
    name: "Systemprogrammierung",
    dozent: "Prof. Dr. Hoffmann",
    semester: 2,
    studiengang: DBRef("studiengang", ain._id),
    sws: 5,
    ects: 5
  },
  {
    name: "Stochastik",
    dozent: "Prof. Dr. Fischer",
    semester: 3,
    studiengang: DBRef("studiengang", ain._id),
    sws: 3,
    ects: 4
  },
  {
    name: "AI 2D Computer Vision",
    dozent: "Prof. Dr. Wagner",
    semester: 5,
    studiengang: DBRef("studiengang", ain._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Artificial Intelligence",
    dozent: "Prof. Dr. Richter",
    semester: 5,
    studiengang: DBRef("studiengang", ain._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Kommunikationstechnik",
    dozent: "Prof. Dr. Klein",
    semester: 5,
    studiengang: DBRef("studiengang", ain._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Mikroprozessorsysteme",
    dozent: "Prof. Dr. Wolf",
    semester: 5,
    studiengang: DBRef("studiengang", ain._id),
    sws: 4,
    ects: 5
  }
])

// Insert Vorlesung von GIB

const gib = db.studiengang.findOne({ kuerzel: "GIB" })

db.vorlesung.insertMany([
  {
    name: "Internet-Technologien",
    dozent: "Prof. Dr. Weber",
    semester: 2,
    studiengang: DBRef("studiengang", gib._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Mathematik 2",
    dozent: "Prof. Dr. Keller",
    semester: 2,
    studiengang: DBRef("studiengang", gib._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Programmiertechnik 2",
    dozent: "Prof. Dr. Schneider",
    semester: 2,
    studiengang: DBRef("studiengang", gib._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Technische Grundlagen der Informatik",
    dozent: "Prof. Dr. Braun",
    semester: 2,
    studiengang: DBRef("studiengang", gib._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Geschäftsprozesse im Gesundheitswesen",
    dozent: "Prof. Dr. Hoffmann",
    semester: 4,
    studiengang: DBRef("studiengang", gib._id),
    sws: 2,
    ects: 3
  },
  {
    name: "IT-Projektmanagement",
    dozent: "Prof. Dr. Fischer",
    semester: 4,
    studiengang: DBRef("studiengang", gib._id),
    sws: 4,
    ects: 5
  },
  {
    name: "Requirements und Usability Engineering",
    dozent: "Prof. Dr. Wagner",
    semester: 4,
    studiengang: DBRef("studiengang", gib._id),
    sws: 3,
    ects: 4
  },
  {
    name: "Software- und Systemmodellierung",
    dozent: "Prof. Dr. Richter",
    semester: 4,
    studiengang: DBRef("studiengang", gib._id),
    sws: 4,
    ects: 5
  },
  {
    name: "WAPF Consumer Health und Ambient Assisted Living",
    dozent: "Prof. Dr. Klein",
    semester: 6,
    studiengang: DBRef("studiengang", gib._id),
    sws: 2,
    ects: 3
  },
  {
    name: "Gesundheitssysteme",
    dozent: "Prof. Dr. Wolf",
    semester: 6,
    studiengang: DBRef("studiengang", gib._id),
    sws: 3,
    ects: 4
  }
])

// Insert Vorlesung von MSI

const msi = db.studiengang.findOne({ kuerzel: "MSI" })

db.vorlesung.insertMany([
  {
    name: "Data Analysis",
    dozent: "Prof. Dr. Weber",
    semester: 1,
    studiengang: DBRef("studiengang", msi._id),
    sws: 3,
    ects: 4
  },
  {
    name: "Data Science",
    dozent: "Prof. Dr. Keller",
    semester: 1,
    studiengang: DBRef("studiengang", msi._id),
    sws: 2,
    ects: 3
  },
  {
    name: "IT-Recht",
    dozent: "Prof. Dr. Schneider",
    semester: 1,
    studiengang: DBRef("studiengang", msi._id),
    sws: 3,
    ects: 4
  },
  {
    name: "Entrepreneurship für Informatiker",
    dozent: "Prof. Dr. Braun",
    semester: 1,
    studiengang: DBRef("studiengang", msi._id),
    sws: 2,
    ects: 3
  },
  {
    name: "Führung",
    dozent: "Prof. Dr. Hoffmann",
    semester: 2,
    studiengang: DBRef("studiengang", msi._id),
    sws: 2,
    ects: 3
  },
  {
    name: "Strategic IT-Management 1",
    dozent: "Prof. Dr. Fischer",
    semester: 2,
    studiengang: DBRef("studiengang", msi._id),
    sws: 3,
    ects: 4
  },
  {
    name: "Theoretische Grundlagen für das IT-Management",
    dozent: "Prof. Dr. Wagner",
    semester: 2,
    studiengang: DBRef("studiengang", msi._id),
    sws: 2,
    ects: 3
  },
  {
    name: "Cloud Application Development",
    dozent: "Prof. Dr. Richter",
    semester: 2,
    studiengang: DBRef("studiengang", msi._id),
    sws: 4,
    ects: 5
  },
  {
    name: "IT-Sicherheitsarchitekturen",
    dozent: "Prof. Dr. Wolf",
    semester: 2,
    studiengang: DBRef("studiengang", msi._id),
    sws: 2,
    ects: 3
  },
  {
    name: "Konzepte aktueller Datenbanksysteme",
    dozent: "Prof. Dr. Wolf",
    semester: 2,
    studiengang: DBRef("studiengang", msi._id),
    sws: 5,
    ects: 4
  }
])





//Aufgabe 2
// a) Welche Studiengänge haben einen Bachelor als Abschluss? Es sollen nur die Studiengangskürzel ausgegeben werden. 

db.studiengang.find({abschluss : "Bachelor"} , {kuerzel: 1, _id: 0})



// b) Ermitteln Sie, welche AIN-Vorlesungen weniger als 5 SWS besitzen. Es sollen nur die Vorlesungsnamen alphabetisch sortiert ausgegeben werden. 

db.vorlesung.aggregate([{
  $lookup: {
    from: "studiengang",
    localField: "studiengang.$id",
    foreignField: "_id",
    as: "ain"
  }
}, {
  $match: {
    sws: {$lt: 5},
    "ain.kuerzel": "AIN"
  }
}, {
  $project: {
    _id: 0,
    name: 1
  }
}, {
  $sort: {
    name: 1
  }
}])


// c) Bei welchen Vorlesungen ist SWS größer als ECTS?

db.vorlesung.find({$expr: {$gt: ["$sws", "$ects"]}}, {name: 1, _id: 0})

// d) Wie viele MSI-Vorlesungen halten die einzelnen Professoren? Es soll nur der Professorname und die SWS-Summe ausgegeben werden. 


db.vorlesung.aggregate([
    {
        $lookup: {
            from: "studiengang",
            localField: "studiengang.$id",
            foreignField: "_id",
            as: "studiengang"
        }
    },
    { 
        $match: { "studiengang.kuerzel": "MSI" 
        } 
    },
    {
        $project: {
            _id: 0,
            dozent: 1,
            sws: 1
        }
    },
    {
        $group: {
            _id: "$dozent",
            totalSWS: { $sum: "$sws" }
        }
    }
]
)

// e) Welcher Professor hält am meisten SWS in AIN-Vorlesungen? 


db.vorlesung.aggregate([
    {
        $lookup: {
            from: "studiengang",
            localField: "studiengang.$id",
            foreignField: "_id",
            as: "studiengang"
        }
    },
    { 
        $match: { "studiengang.kuerzel": "AIN" 
        } 
    },
    {
        $project: {
            _id: 0,
            dozent: 1,
            sws: 1
        }
    },
    {
        $group: {
            _id: "$dozent",
            maxSWS: { $max: "$sws" }
        }
    },
    {
        $sort: {
            maxSWS: -1
        }
    },
    {
        $limit: 1
    }
]
)
