import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
//TODO use ListView
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiscoverButton from './components/discover/discoverButton';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combinReduxers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import {ActionCreators} from "./actions/index";

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const DISCOVERING = 0;
const FRIENDS = 1;
const MESSAGES = 2;


function mapDispatchToPros(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class AddUser extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (<Icon name="user" size={15} style={styles.leftComponent}/>)
	}
}

class Footer extends Component {

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

class Like extends Component {

    render () {
        return (
            <View/>
        )
    }
}

class Discuss extends Component {

	render () {
		return (
            <View/>
		)
	}
}

class Introduce extends Component {

	render () {
		return (
            <View/>
		)
	}
}

class SocialActionBar extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={{flexDirection: 'row'}}>
                <Like></Like>
                <Discuss></Discuss>
                <Introduce></Introduce>
            </View>
        )
    }
}

class Friend extends Component {

    constructor(props) {
        super(props);
    }

    render() {
		return (
            <View key={this.props.idx}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require("./img1_2x.jpg")}></Image>
                    <View>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.status}</Text>
                    </View>
                </View>
            </View>
		)
    }
}

class User extends Component {
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
                        title='Request' />
                </View>
                <Text>{this.props.description}</Text>
            </View>
        )
    }
}

class FriendsButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button
                    raised
                    onPress={this.props.friendsSelect}
                    icon={{name: 'cached'}}
                    title='Friends Select' />
            </View>
        )
    }
}

class FriendsList extends Component {

    constructor(props) {
        super(props);

        this.state = {friendsList: []};
    }

    render() {
        if (this.state.friendsList.length > 0) {
			return (
                <View>
					{this.state.friendsList}
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

class UserList extends Component {

    render() {
        let userList = [];
        for(let i = 0; i < 4; i++) {
            userList.push(<User key={i} description={"A description: " + i}></User>);
        }

        if (userList.length > 0) {
			return (
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{padding: 10}}>Nearby</Text>
                        <Text style={{padding: 10}}>Friend Requests</Text>
                    </View>
                    <View>
                        {userList}
                    </View>
                </View>
			)
        } else {

            return (
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Nearby</Text>
                        <Text>Friend Requests</Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.emptyContainer}>
                        <Text> Cannot find anybody to connect with</Text>
                        <Text> Note: You may need to enable Discovery on your app</Text>
                    </ScrollView>
                </View>
            )
        }
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View>
                {this.props.component}
            </View>
        )
    }
}

class Vibe extends Component {

  constructor(props) {
      super(props);

      this.state = {
          appState: DISCOVERING,
          freindsDb: [],
      }
  }

  renderFactory (state) {
      return (prev) => {
        this.setState({appState: state});
      }
  };

  addFriend (friend) {
      this.state.freindsDb.push(friend);
  }

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

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Vibe />
            </Provider>
        )
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
