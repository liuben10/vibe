import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddUser extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<View>
			<Text>Add User</Text>
		</View>)
	}
}

const styles = StyleSheet.create({
	leftComponent: {
		color: '#fff'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	emptyContainer: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
});