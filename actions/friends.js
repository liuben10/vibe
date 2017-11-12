import * as types from './types'

export function addFriends(friends) {
	return (dispatch, getState) => {
		dispatch(setFriends({friends: friends}));
	}
}

export function setFriends({ friends }) {
	return {
		type: types.ADD_FRIEND,
		friends,
	}
}