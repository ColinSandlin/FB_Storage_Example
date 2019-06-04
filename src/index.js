import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBcqTjpOLNojdI-7ynQHD3iiJ7xX8yF4AU",
    authDomain: "fe-capstone-test.firebaseapp.com",
    databaseURL: "https://fe-capstone-test.firebaseio.com",
    projectId: "fe-capstone-test",
    storageBucket: "fe-capstone-test.appspot.com",
    messagingSenderId: "432275181648",
    appId: "1:432275181648:web:476110ef3e00d50d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
