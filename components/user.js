import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { Button } from 'react-native-elements';

export default class User extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View key={this.props.idx}>
				<View style={{flexDirection: 'row'}}>
					<Image source={require("../img1_2x.jpg")}></Image>
					<Button
						large
						title='Request' />
				</View>
				<Text>{this.props.description}</Text>
			</View>
		)
	}
}
