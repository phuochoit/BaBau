import { StackNavigator } from "react-navigation";

// screenName
import { WELLCOME, DUEDATECALCULATOR } from "../values/screenName";

//DueDate
import DueDateCalculatorComponent from "../components/DueDateCalculator/DueDateCalculatorComponent";
import DueDateComponet from "../components/Config/DueDateComponet";
//Wellcome
import WellcomeComponent from "../components/Wellcome/WellcomeComponent";

export default IntroStack = StackNavigator(
    {
        WELLCOME: {
            screen: WellcomeComponent
        },
        DUEDATECALCULATOR: {
            screen: DueDateCalculatorComponent
        },
        DUEDATE: {
            screen: DueDateComponet
        },
    }, {
        headerMode: "none"
    }
);