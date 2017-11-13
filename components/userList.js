import React, {Component} from 'react';
import { Text, View, ScrollView} from 'react-native';

import User from './user';

export default class UserList extends Component {

	render() {
		let userList = [];
		for(let i = 0; i < 4; i++) {
			userList.push(<User key={i} name={"ARandomName" + i} description={"A description: " + i}></User>);
		}

		if (userList.length > 0) {
			return (
				<View>
					<View style={{flexDirection: 'row'}}>
						<Text style={{padding: 10}}>Nearby</Text>
						<Text style={{padding: 10}}>Friend Requests</Text>
					</View>
					<View>
						{userList}
					</View>
				</View>
			)
		} else {

			return (
				<View>
					<View style={{flexDirection: 'row'}}>
						<Text>Nearby</Text>
						<Text>Friend Requests</Text>
					</View>
					<ScrollView contentContainerStyle={styles.emptyContainer}>
						<Text> Cannot find anybody to connect with</Text>
						<Text> Note: You may need to enable Discovery on your app</Text>
					</ScrollView>
				</View>
			)
		}
	}
}