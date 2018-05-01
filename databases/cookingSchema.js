import { COOKINGSHEMA } from "../values/schemaName";
const CookingSchema = {
    name: COOKINGSHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        name: 'string',
        description: 'string?',
        image: 'string?',
        ingredient: 'string?',
        prepare: 'string?',
        cook: 'string?',
        eat: 'string?',
        advice: 'string?',
        receip_yield: 'string?',
        cook_time: 'string?',
        searchTerm: 'string?',
        is_favourite: 'int'
    }
}
export default CookingSchema;