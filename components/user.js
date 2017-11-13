import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {addFriends} from "../actions/friends";

class User extends Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

	createOnPress(allFriends) {
		return () => {
			this.props.friendRequest(allFriends);
		}
	}

	render() {
		let onPress = this.createOnPress(this.props.allFriends);
		return (
			<View key={this.props.idx}>
				<View style={{flexDirection: 'row'}}>
					<Image source={require("../img1_2x.jpg")}></Image>
					<Button
						large
						onPress={onPress}
						title='Request' />
				</View>
				<Text>{this.props.description}</Text>
			</View>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let friendsList = [];

	for(let k in state.addedFriends) {
		friendsList.push({name: k});
	}

	return {
		allFriends: friendsList,
		name: ownProps.name,
		status: ownProps.status
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		friendRequest: (allFriends) => {
			allFriends.push({name: ownProps.name, status: ownProps.status});
			dispatch(addFriends(allFriends));
		},
		dispatch: dispatch
	}
}

// export default User
export default connect(mapStateToProps, mapDispatchToProps)(User)