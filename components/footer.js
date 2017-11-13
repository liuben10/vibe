import React, {Component} from 'react';
import { View} from 'react-native';


import DiscoverButton from './discoverButton';
import FriendsButton from './friendsButton';

export default class Footer extends Component {

	render() {
		return (
			<View style={{flexDirection: 'row'}}>
				<DiscoverButton discoverSelect={this.props.discoverSelect} />
				<FriendsButton friendsSelect={this.props.friendsSelect}/>
			</View>
		)
	}
}