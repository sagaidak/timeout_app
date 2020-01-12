
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';
import ProductList from "./Components/ProductList";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


const store = createStore(reducers, applyMiddleware(ReduxThunk));

const RootStack = createDrawerNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        ProductList: ProductList,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}