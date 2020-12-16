import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3I-mqMoQhjzXcDfEPEJ9ghKWFverNJbE",
    authDomain: "crwn-db-97084.firebaseapp.com",
    projectId: "crwn-db-97084",
    storageBucket: "crwn-db-97084.appspot.com",
    messagingSenderId: "726997909194",
    appId: "1:726997909194:web:db876e323a175674e63e33",
    measurementId: "G-6M02BVW236"
  };

  export const createUserProfileDocument = async (userAuth, additionalData )=> {

    if (! userAuth)  return;
    

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const{ displayName , email} = userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData 
          })
      } catch(error){
          console.log('error creating user', error.message);
      }
    }

    return userRef;
    
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;