export default function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		console.log("Reducer created");
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}
}