import { StackNavigator } from "react-navigation";

// screenName
import { DRINK, DRINKDETAIL } from "../values/screenName";
// cooking 
import DrinkContainer from "../containers/Drink/DrinkContainer";
import DrinkDetailContainer from "../containers/Drink/DrinkDetailContainer";

export default DrinkStack = StackNavigator(
    {
        DRINK: {
            screen: DrinkContainer
        },
        DRINKDETAIL: {
            screen: DrinkDetailContainer
        }
    }, {
        headerMode: "none"
    }
); 