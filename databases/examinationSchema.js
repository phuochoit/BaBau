import { EXAMINATIONSHEMA } from "../values/schemaName";

const ExaminationSchema = {
    name: EXAMINATIONSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        week: 'int',
        name: 'string',
        content: 'string?'
    }
}

export default ExaminationSchema;