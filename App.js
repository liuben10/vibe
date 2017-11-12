import React, {Component} from 'react';
//TODO use ListView
import { AppRegistry } from 'react-native'
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combinReduxers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import Vibe from './components/vibe';
import * as actions from './actions';
import { ADD_FRIEND } from "./actions/types";

import { addFriends } from "./actions/friends";

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends Component {

    constructor(props) {
        super(props);
        store.dispatch(addFriends([{name: 'foo'}]));
		// store.dispatch({type: ADD_FRIEND, friend: {name: 'foo'}});

		console.log(store.getState());
    }

    render () {
        return (
            <Provider store={store}>
                <Vibe />
            </Provider>
        )
    }
}
