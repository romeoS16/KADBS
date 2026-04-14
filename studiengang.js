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