import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyC9gO6WTREOhvAVVd7S5LnfS0mbzF6aQK8",
    authDomain: "mini-project-sem5.firebaseapp.com",
    databaseURL: "https://mini-project-sem5.firebaseio.com/",
    projectId: "mini-project-sem5",
    // storageBucket: "mini-project-sem5.appspot.com",
    messagingSenderId: "332857880951"
};
firebase.initializeApp(config)

export const firebaseListener = function firebaseListener(next) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user)
            next(true, user)
        else
            next(false)
    }, function (error) {
        console.log(error)
    })
}
export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth