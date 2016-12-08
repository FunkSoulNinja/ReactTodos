import firebase from 'firebase';

try {
    const config = {
        apiKey: "AIzaSyC4lJUF2jCaKrJQpqmrLsjsUGaeyx9rlcg",
        authDomain: "auth-73a05.firebaseapp.com",
        databaseURL: "https://auth-73a05.firebaseio.com",
        storageBucket: "auth-73a05.appspot.com",
        messagingSenderId: "816206983527"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;
