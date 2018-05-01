import { TIPSHEMA } from "../values/schemaName";
const TipSchema = {
    name: TIPSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        week: 'int',
        content: 'string'
    }
}

export default TipSchema;