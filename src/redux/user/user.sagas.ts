import { takeLatest, put, all, call } from 'redux-saga/effects';
import { 
	auth, 
	createUserProfileDocument, 
	googleProvider, 
} from '../../firebase/firebase.utils';
import { signInSuccess } from './user.actions';

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

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
	])
}