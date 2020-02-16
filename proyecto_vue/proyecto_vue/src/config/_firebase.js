import * as firebase from 'firebase'

var firebaseConfig = {
	apiKey: 'AIzaSyA_4-0kMuAq89OofFu-bnfPzuzZeiJ78vY',
	authDomain: 'proyectointegral-9815d.firebaseapp.com',
	databaseURL: 'https://proyectointegral-9815d.firebaseio.com',
	projectId: 'proyectointegral-9815d',
	storageBucket: 'proyectointegral-9815d.appspot.com',
	messagingSenderId: '779102515104',
	appId: '1:779102515104:web:b2ce3225148c63ebedfec5',
	measurementId: 'G-CMEJ391QJ1'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
