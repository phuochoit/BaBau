import { StackNavigator } from "react-navigation";

// screenName
import { WELLCOME, DUEDATECALCULATOR } from "../values/screenName";
// StackNavigator
import DueDateStack from "./DueDateStack";
//Wellcome
import WellcomeComponent from "../components/Wellcome/WellcomeComponent";

export default IntroStack = StackNavigator(
    {
        WELLCOME: {
            screen: WellcomeComponent
        },
        DUEDATECALCULATOR: {
            screen: DueDateStack
        },
    }, {
        headerMode: "none"
    }
);