import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { Header} from 'react-native-elements';
import Footer from './footer';
import UserList from './userList';
import AddUser from './addUser';
import FriendsList from './friendsList';

const DISCOVERING = 0;
const FRIENDS = 1;
const MESSAGES = 2;

export default class Vibe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			appState: DISCOVERING,
			friendsDb: [],
		}
	}

	addFriend (friend) {
		this.state.friendsDb.push(friend);
	}

	renderFactory (state) {
		return (prev) => {
			this.setState({appState: state});
		}
	};

	render() {

		let renderDiscovering = this.renderFactory(DISCOVERING);
		let renderFriends = this.renderFactory(FRIENDS);
		let renderMessages = this.renderFactory(MESSAGES);

		let mainComponent = (<UserList/>);
		if (this.state.appState == FRIENDS) {
			mainComponent = (<FriendsList/>);
		}

		return (
			<View style={styles.container}>
				<Header
					leftComponent={<AddUser></AddUser>}
					centerComponent={{ text: 'Discover', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff' }}
					backgroundColor='#2BAD86'
				/>
				{mainComponent}
				<Footer
					discoverSelect={renderDiscovering}
					friendsSelect={renderFriends}
					messagesSelect={renderMessages}
				></Footer>
			</View>
		);
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