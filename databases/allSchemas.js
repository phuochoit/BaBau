import Realm from 'realm';
// Define your models and their properties
import ExaminationSchema from "./examinationSchema";
import WeekSchema from "./weekSchema";
import TipSchema from "./tipSchema";
import CookingSchema from "./cookingSchema";
import FoodSchema from "./foodSchema";
import VaccinationSchema from "./vaccinationSchema";
import BalanceSchema from "./balanceSchema";
import BabyNameSchema from "./babyNameSchema";
import StorySchema from "./storySchema";

Realm.copyBundledRealmFiles();
const databaseOptions = {
    path: 'babau.realm',
    schema: [WeekSchema, ExaminationSchema, TipSchema, CookingSchema, FoodSchema, VaccinationSchema, BalanceSchema, BabyNameSchema, StorySchema],
    schemaVersion: 65, //optional    

};

// export const queryAllActivity = () => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         let allActivity = realm.objects(ACTIVITY_SCHEMA);
//         resolve(allActivity);
//     }).catch((error) => {
//         reject(error);
//     });
// });

// export const insertNewActivity = newActivity => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         realm.write(() => {
//             realm.create(ACTIVITY_SCHEMA, newActivity);
//             resolve(newActivity);
//         });
//     }).catch((error) => reject(error));
// });
// export const updateActivity = ActivityList => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         realm.write(() => {
//             let updatingActivity = realm.objectForPrimaryKey(ACTIVITY_SCHEMA, ActivityList._id);
//             updatingActivity.name = ActivityList.name;
//             updatingActivity.length = ActivityList.length;
//             updatingActivity.advice = ActivityList.advice;
//             updatingActivity.h1 = ActivityList.h1;
//             updatingActivity.h2 = ActivityList.h2;
//             updatingActivity.h3 = ActivityList.h3;
//             updatingActivity.p1 = ActivityList.p1;
//             updatingActivity.p2 = ActivityList.p2;
//             updatingActivity.p3 = ActivityList.p3;
//             resolve();
//         });
//     }).catch((error) => reject(error));;
// });

// export const deleteActivity = ActivityListId => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         realm.write(() => {
//             let deletingActivityList = realm.objectForPrimaryKey(ACTIVITY_SCHEMA, ActivityListId);
//             realm.delete(deletingActivityList);
//             resolve();
//         });
//     }).catch((error) => reject(error));;
// });

export default new Realm(databaseOptions);