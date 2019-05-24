import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/AppNavigation';
import * as firebase from 'firebase';

export default class App extends React.Component {
	componentWillMount() {
		const firebaseConfig = {
			apiKey: 'AIzaSyCJYMUC2ubZCvLSCJ4equaZ7QpL5VtsJ8s',
			authDomain: 'authapp-c35e7.firebaseapp.com',
			databaseURL: 'https://authapp-c35e7.firebaseio.com',
			projectId: 'authapp-c35e7',
			storageBucket: 'authapp-c35e7.appspot.com',
			messagingSenderId: '159389414860',
			appId: '1:159389414860:web:5061ca4e305fad7b',
		};

		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}
	render() {
		return <AppNavigation />;
	}
}
