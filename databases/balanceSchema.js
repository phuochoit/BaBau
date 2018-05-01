import { BALANCESHEMA } from "../values/schemaName";
const BalanceSchema = {
    name: BALANCESHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        week: 'int',
        length: 'double',
        weight: 'int'
    }
}

export default BalanceSchema;