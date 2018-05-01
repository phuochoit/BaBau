import { BABYNAMESHEMA } from "../values/schemaName";
const BabyNameSchema = {
    name: BABYNAMESHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        sex: 'int',
        bletter: 'string',
        name: 'string',
        description: 'string?',
        is_favourite: 'int'
    }
}

export default BabyNameSchema;