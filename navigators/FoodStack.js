import { StackNavigator } from "react-navigation";

// screenName
import { FOOD, FOODDETAIL } from "../values/screenName";
// cooking 
import FoodContainer from "../containers/Food/FoodContainer";
import FoodDetailContainer from "../containers/Food/FoodDetailContainer";

export default FoodStack = StackNavigator(
    {
        FOOD: {
            screen: FoodContainer
        },
        FOODDETAIL: {
            screen: FoodDetailContainer
        }
    }, {
        headerMode: "none"
    }
); 