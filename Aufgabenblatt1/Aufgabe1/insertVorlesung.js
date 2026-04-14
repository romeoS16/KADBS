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


db.vorlesungen.insertMany([
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

db.vorlesungen.insertMany([
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

db.vorlesungen.insertMany([
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
    dozent: "Prof. Dr. Klein",
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
    sws: 3,
    ects: 4
  }
])

