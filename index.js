import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from "./Splash";
console.disableYellowBox = true;
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

// reducers
import rootReducer from './reducers/rootReducer';

// component
import AppNavigator from "./navigators/RootNavigation";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

console.disableYellowBox = true;
export default App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'App' })
        }, 2500);
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />
        return mainScreen
    }
}

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('Babau', () => App);
