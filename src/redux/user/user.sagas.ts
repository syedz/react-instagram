import { takeLatest, put, all, call } from 'redux-saga/effects';
import { 
	auth, 
	createUserProfileDocument, 
	getCurrentUser, 
	googleProvider, 
} from '../../firebase/firebase.utils';
import { 
	signInSuccess,
	signOutFailure, 
	signOutSuccess,
} from './user.actions';

import UserActionTypes from './user.types';

export function* getSnapshotFromUserAuth(userAuth: any, additionalData?: any) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapshot = yield userRef.get();

		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		console.log(error);
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		console.log(error);	
	}
}

export function* signOut() {
	try {
			yield auth.signOut();
			yield put(signOutSuccess());
	} catch (error) {
			yield put(signOutFailure(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		console.log(error);
	}
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
	])
}