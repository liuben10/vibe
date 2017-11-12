import React, {Component} from 'react';
import { View} from 'react-native';
//TODO use ListView

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
