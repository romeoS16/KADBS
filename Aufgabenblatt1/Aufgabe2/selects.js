//Aufgabe 2
// a) Welche Studiengänge haben einen Bachelor als Abschluss? Es sollen nur die Studiengangskürzel ausgegeben werden. 

db.studiengang.find({abschluss : "Bachelor"} , {kuerzel: 1, _id: 0})

// b) b) Ermitteln Sie, welche AIN-Vorlesungen weniger als 5 SWS besitzen. Es sollen nur die Vorlesungsnamen alphabetisch sortiert ausgegeben werden. 

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


