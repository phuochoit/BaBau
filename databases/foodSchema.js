import { FOODSHEMA } from "../values/schemaName";

const FoodSchema = {
    name: FOODSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        name: 'string',
        advice: 'string?',
        h1: 'string?',
        p1: 'string?',
        h2: 'string?',
        p2: 'string?',
        h3: 'string?',
        p3: 'string?',
        status: 'int',
        advise: 'int',
        advise_name: 'string'
    }
}

export default FoodSchema;