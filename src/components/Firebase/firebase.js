import firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp({projectId: "kitsc-rl-tracker",});
var db = firebase.firestore();

export default db;