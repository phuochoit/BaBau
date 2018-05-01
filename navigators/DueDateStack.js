import { StackNavigator } from "react-navigation";

// screenName
import {  DUEDATE, DUEDATECALCULATOR } from "../values/screenName";

//Wellcome
import DueDateCalculatorComponent from "../components/DueDateCalculator/DueDateCalculatorComponent";
import DueDateComponet from "../components/Config/DueDateComponet";

export default DueDateStack = StackNavigator(
    {
        DUEDATECALCULATOR: {
            screen: DueDateCalculatorComponent
        },
        DUEDATE: {
            screen: DueDateComponet
        }
    }, {
        headerMode: "none"
    }
); 