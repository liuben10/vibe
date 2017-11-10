import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * For reference on how to define constructors and stuff.
 *
 * class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showText: true};
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}
 */


class AddUserComponent extends React.Component {
	render() {
		return (<Icon name="user" size={15} style={styles.leftComponent}/>)
	}
}

class Footer extends React.Component {

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={require("./compass.svg")}></Image>
                <Image source={require("./message.svg")}></Image>
                <Image source={require("./friends.svg")}></Image>
            </View>
        )
    }
}

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View key={this.props.idx}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require("./img1_2x.jpg")}></Image>
                    <Button
                        large
                        lefticon={{name: 'envira', type: 'font-awesome'}}
                        title='Request' />
                </View>
                <Text>{this.props.description}</Text>
            </View>
        )
    }
}

class UserList extends React.Component {

    render() {
        let userList = [];
        for(let i = 0; i < 4; i++) {
            userList.push(<User idx={i} description={"A description: " + i}></User>);
        }
        return (
            <View>
                {userList}
            </View>
        )
    }
}

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Discover', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
              backgroundColor='#2BAD86'
          />
          <UserList></UserList>
          <Footer></Footer>
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
});
