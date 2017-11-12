import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';

export default class Friend extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View key={this.props.idx}>
				<View style={{flexDirection: 'row'}}>
					<Image source={require("../img1_2x.jpg")}></Image>
					<View>
						<Text>{this.props.name}</Text>
						<Text>{this.props.status}</Text>
					</View>
				</View>
			</View>
		)
	}
}