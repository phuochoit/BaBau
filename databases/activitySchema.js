import { ACTIVITYSHEMA } from "../values/schemaName";
const ActivityShema = {
    name: ACTIVITYSHEMA,
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
        p3: 'string?'
    }
}

export default ActivityShema;