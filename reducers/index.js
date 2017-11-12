import { combineReducers } from 'redux'

import * as friendsReducer from './friends'


export default combineReducers(Object.assign(
	friendsReducer
));