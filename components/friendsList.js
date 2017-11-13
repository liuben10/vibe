import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { connect } from 'react-redux';
import Friend from "./friend";

class FriendsList extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		if (this.props.friends.length > 0) {
			let friendsListRendered = [];
			for(var idx in this.props.friends) {
				let friend = this.props.friends[idx];
				friendsListRendered.push(<Friend name={friend.name} status={"Some status"} />);
			}
			return (
				<View>
					{friendsListRendered}
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

const mapStateToProps = (state) => {
	let friendsList = [];

	for(let k in state.addedFriends) {
		friendsList.push({name: k});
	}

	return {
		friends: friendsList
	}
};

export default connect(mapStateToProps)(FriendsList);