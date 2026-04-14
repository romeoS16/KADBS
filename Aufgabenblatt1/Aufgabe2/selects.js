//Aufgabe 2
// a) Welche Studiengänge haben einen Bachelor als Abschluss? Es sollen nur die Studiengangskürzel ausgegeben werden. 

db.studiengang.find({abschluss : "Bachelor"} , {kuerzel: 1, _id: 0})

// b)

