import React, {Component} from 'react';
import { StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddUser extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<Icon name="user" size={15} style={styles.leftComponent}/>)
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