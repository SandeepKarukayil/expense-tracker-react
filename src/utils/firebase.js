// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBfoBchgWPjXqUj4ZVNt97_sl0XbZ7AhAA',
	authDomain: 'expense-tracker-5561a.firebaseapp.com',
	projectId: 'expense-tracker-5561a',
	storageBucket: 'expense-tracker-5561a.appspot.com',
	messagingSenderId: '614340285220',
	appId: '1:614340285220:web:5ce88d112e90ba9f3e19b1',
	measurementId: 'G-WF35LHHCLH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
