import React, {Component} from 'react';
import { View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import DiscoverButton from './discoverButton';
import FriendsButton from './friendsButton';

export default class Footer extends Component {

	render() {
		return (
			<View style={{flexDirection: 'row'}}>
				<DiscoverButton discoverSelect={this.props.discoverSelect} />
				<FriendsButton friendsSelect={this.props.friendsSelect}/>
				<Icon name="rocket" size={30} style={{padding: 20}}></Icon>
			</View>
		)
	}
}