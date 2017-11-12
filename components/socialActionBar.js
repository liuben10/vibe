import React, {Component} from 'react';
import { View} from 'react-native';
//TODO use ListView
import { bindActionCreators } from 'redux';
import { createStore, applyMiddleware, combinReduxers, compose } from 'redux';
import Like from './like';
import Discuss from './discuss';
import Introduce from './introduce';

export default class SocialActionBar extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<View style={{flexDirection: 'row'}}>
				<Like></Like>
				<Discuss></Discuss>
				<Introduce></Introduce>
			</View>
		)
	}
}