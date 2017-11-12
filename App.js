import React, {Component} from 'react';
//TODO use ListView
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combinReduxers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import Vibe from './components/vibe';

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
    render () {
        return (
            <Provider store={store}>
                <Vibe />
            </Provider>
        )
    }
}
