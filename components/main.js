import React, {Component} from 'react';
import { View} from 'react-native';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<View>
				{this.props.component}
			</View>
		)
	}
}
