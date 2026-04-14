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