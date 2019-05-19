import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAywukLHqn9IWkiX3t7i3ItFx4C7oBquFk",
    authDomain: "picturealbum-98939.firebaseapp.com",
    databaseURL: "https://picturealbum-98939.firebaseio.com",
    projectId: "picturealbum-98939",
    storageBucket: "picturealbum-98939.appspot.com",
    messagingSenderId: "93094101014",
    appId: "1:93094101014:web:c2498984bc3e7a1f"
  };


  firebase.initializeApp(config);

  const database = firebase.database();

  export {database};