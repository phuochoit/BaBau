import { VACCINATIONSHEMA } from "../values/schemaName";
const VaccinationSchema = {
    name: VACCINATIONSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        name: 'string',
        description: 'string'
    }
}

export default VaccinationSchema;