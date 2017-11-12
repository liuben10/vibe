import createReducer from '../lib/createReducer'
import * as types from '../actions/types';

export const addedFriends = createReducer({}, {
	[types.ADD_FRIEND](state, action) {
		let newState = {};
		action.friends.forEach( (friend) => {
			let id = friend.name;
			newState[id] = Object.assign({}, friend, { id });
		});
		return newState;
	}
});