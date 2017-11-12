import React, {Component} from 'react';
import { View} from 'react-native';
//TODO use ListView
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combinReduxers, compose } from 'redux';

export default class Like extends Component {

	render () {
		return (
			<View/>
		)
	}
}