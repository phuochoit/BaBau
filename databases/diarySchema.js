import { DIARYSHEMA } from "../values/schemaName";
const DiaryShema = {
    name: DIARYSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        name: 'string?',
        content: 'string?',
        status: 'int',
        milestone: 'MileStone[]'
    }
}

export default DiaryShema;