import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/common/Button';
import { Facebook } from 'expo';
import * as firebase from 'firebase';

export default class LandingScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	async FacebookLogin() {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync('341408809899366', {
			permission: 'public_profile',
		});

		if (type == 'success') {
			const credential = firebase.auth.FacebookAuthProvider.credential(token);
			const facebookProfile = await firebase.auth().signInWithCredential(credential);

			console.log('facebookProfile ', facebookProfile);

			// Listen for authentication state to change.
			firebase.auth().onAuthStateChanged(user => {
				if (user != null) {
					console.log('We are authenticated now!', user);
				}

				// Do other things
			});
		}
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Button
					onButtonPress={() => this.FacebookLogin()}
					backgroundColor="blue"
					title={'Login with Facebook'}
				/>
				<Button backgroundColor="orange" title={'Login with Email'} />
				<Button title={'Sign Up  with Email'} />
			</View>
		);
	}
}
