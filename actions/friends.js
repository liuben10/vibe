import * as types from './types'

export function addFriends(friends) {
	console.log("Adding friend.");
	return (dispatch, getState) => {
		console.log("Wow a friend has been added, how interesting.");
		dispatch(setFriends({friends: friends}));
	}
}

export function setFriends({ friends }) {
	console.log("Set friends with!");
	return {
		type: types.ADD_FRIEND,
		friends,
	}
}