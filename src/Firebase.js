import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCM9DyIv10MNWs5-cAR50hNtHTmgs1syM",
  authDomain: "tesla-clone-2808.firebaseapp.com",
  projectId: "tesla-clone-2808",
  storageBucket: "tesla-clone-2808.appspot.com",
  messagingSenderId: "961866785005",
  appId: "1:961866785005:web:77149222d46d7793322ce4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
