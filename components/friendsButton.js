import React, {Component} from 'react';
import { View} from 'react-native';
//TODO use ListView
import { Button } from 'react-native-elements';

export default class FriendsButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Button
					raised
					onPress={this.props.friendsSelect}
					icon={{name: 'cached'}}
					title='Friends Select' />
			</View>
		)
	}
}
