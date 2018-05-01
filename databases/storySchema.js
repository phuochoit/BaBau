import { STORYSHEMA } from "../values/schemaName";
const StorySchema = {
    name: STORYSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        title: 'string',
        detail: 'string',
        is_favourite: 'int'
    }
}

export default StorySchema;