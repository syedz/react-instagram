import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			}
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		default:
			return state;
	}
};

export default userReducer;