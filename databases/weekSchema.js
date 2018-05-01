import { WEEKSHEMA } from "../values/schemaName";
const WeekSchema = {
    name: WEEKSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        overall_mom: 'string?',
        overall_baby: 'string?',
        mom_health: 'string?',
        baby_health: 'string?',
        Tip: 'Tip[]',
        Examination: 'Examination[]'
    }
}

export default WeekSchema;