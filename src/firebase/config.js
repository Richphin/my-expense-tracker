import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3orwy-gzVPFTotXY-yhJOVzv28CJvtew",
  authDomain: "expense-tracker-app-c5869.firebaseapp.com",
  projectId: "expense-tracker-app-c5869",
  storageBucket: "expense-tracker-app-c5869.appspot.com",
  messagingSenderId: "870350454035",
  appId: "1:870350454035:web:df0dbaa70de9b93a286ee6"
    
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;