import React, {Component} from 'react';
import { Text, View} from 'react-native';
//TODO use ListView
export default class FriendsList extends Component {

	constructor(props) {
		super(props);

		this.state = {friendsList: []};
	}

	render() {
		if (this.state.friendsList.length > 0) {
			return (
				<View>
					{this.state.friendsList}
				</View>
			);
		} else {
			return (
				<View>
					<Text>No friends detected</Text>
				</View>
			)
		}

	}
}