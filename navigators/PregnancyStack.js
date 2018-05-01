import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// screenName
import { PREGNANCY, PREGNANCYDETAIL } from "../values/screenName";
//Component
import PregnancyComponent from "../components/Pregnancy/PregnancyComponent";
import PregnancyDetailComponent from "../components/Pregnancy/PregnancyDetailComponent";
import PregnancyContainer from "../containers/Pregnancy/PregnancyContainer";

export default PregnancyStack = StackNavigator(
    {
        PREGNANCY: {
            screen: PregnancyContainer
        },
        PREGNANCYDETAIL: {
            screen: PregnancyDetailComponent
        },

    }, {
        headerMode: "none"
    }
);