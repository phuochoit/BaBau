import { StackNavigator } from "react-navigation";

// screenName
import { COOKING, COOKINGDETAIL } from "../values/screenName";

// cooking 
import CookingContainer from "../containers/Cooking/CookingContainer";
import CookingDetailContainer from "../containers/Cooking/CookingDetailContainer";

export default CookingStack = StackNavigator(
    {
        COOKING: {
            screen: CookingContainer
        },
        COOKINGDETAIL: {
            screen: CookingDetailContainer
        }
    }, {
        headerMode: "none"
    }
); 