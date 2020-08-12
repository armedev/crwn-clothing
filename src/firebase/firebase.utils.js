import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//config data obtained from firebase
const config = {
  apiKey: "AIzaSyA--_P4-1QRXQQJAxajpFTxL3m0SUzPGQE",
  authDomain: "crwn-clothing-640bb.firebaseapp.com",
  databaseURL: "https://crwn-clothing-640bb.firebaseio.com",
  projectId: "crwn-clothing-640bb",
  storageBucket: "crwn-clothing-640bb.appspot.com",
  messagingSenderId: "506980792513",
  appId: "1:506980792513:web:e7b786068b89e348577c40",
  measurementId: "G-YWWYX2HL43",
};

//creates and stores the user data in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//GOOGLE AUTHENTICATION SETUP
const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: "select_account" });

//***** */
//initialize app and export firebase requirements
//***** */
firebase.initializeApp(config);
export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

//***************USED ONLY TO PUSH DATA***************
//creating the store in firebase and add items
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

//**********
//getting collections from FIRESTORE
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
