import React from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';

class DiscoverButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Button
					raised
					onPress={this.props.discoverSelect}
					icon={{name: 'cached'}}
					title='Discover Select' />
			</View>
		)
	}
}

export default DiscoverButton;