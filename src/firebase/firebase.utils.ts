import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCMrqB3Ontz2vL6IykxsaIIzxYpuPqLxxU",
	authDomain: "instagram-667c9.firebaseapp.com",
	projectId: "instagram-667c9",
	storageBucket: "instagram-667c9.appspot.com",
	messagingSenderId: "196089751976",
	appId: "1:196089751976:web:aa073f81282d28f7e8559d"
};

export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get(); 

	console.log(snapShot);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		
		try {
			await userRef.set({
					displayName,
					email, 
					createdAt,
					...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;