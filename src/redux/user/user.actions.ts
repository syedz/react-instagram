import UserActionTypes from './user.types';

export const setCurrentUser = (user: any) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user: any) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});