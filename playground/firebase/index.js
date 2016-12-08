import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC4lJUF2jCaKrJQpqmrLsjsUGaeyx9rlcg",
    authDomain: "auth-73a05.firebaseapp.com",
    databaseURL: "https://auth-73a05.firebaseio.com",
    storageBucket: "auth-73a05.appspot.com",
    messagingSenderId: "816206983527"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();
const todosRef = firebaseRef.child('todos');

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Anthony',
		age: 25
	},
	todos: {}
});


todosRef.on('child_added', (s) => console.log('child_added', s.key, s.val()));
todosRef.on('child_changed', (s) => console.log('child_changed', s.key, s.val()));
todosRef.on('child_removed', (s) => console.log('child_removed', s.key, s.val()));

todosRef.push({
	text: 'Finish this challenge'
});
