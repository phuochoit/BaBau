import { MILESTONESHEMA } from "../values/schemaName";
const MileStoneShema = {
    name: MILESTONESHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        name: 'string?'
    }
}

export default MileStoneShema;