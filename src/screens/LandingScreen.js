import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Button from '../components/common/Button';
import { Facebook } from 'expo';
import * as firebase from 'firebase';

export default class LandingScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	// componentWillMount() {
	//  	// Listen for authentication state to change.
	// 	 firebase.auth().onAuthStateChanged(user => {
	// 		 this.setState({
	// 			 loading: false
	// 		 });

	// 		if (user != null) {
	// 			this.props.navigation.replace('ProfileScreen')
	// 		}

	// 		// Do other things
	// 	}); 
	// }
	

	async FacebookLogin() {
		// First we connect with facebook to get user data 
		const { type, token } = await Facebook.logInWithReadPermissionsAsync('341408809899366', {
			permission: 'public_profile',
		});

		// If connection is successfull then we create our user in the firebase authentication
		if (type == 'success') {
			// First we create credential
			const credential = firebase.auth.FacebookAuthProvider.credential(token);
			// Then we sign in with our firebase
			const facebookProfile = await firebase.auth().signInWithCredential(credential);

			console.log('facebookProfile ', facebookProfile);

			const userID = facebookProfile.user.uid;

			firebase.database().ref('users/' + userID).set({
				name: facebookProfile.user.displayName,
				email: facebookProfile.user.email,
				photo: facebookProfile.user.photoURL
			})

			// Listen for authentication state to change.
			firebase.auth().onAuthStateChanged(user => {
				if (user != null) {
					this.props.navigation.replace('ProfileScreen')
				}

				// Do other things
			});
		}
	}

	render() {
		const { loading } = this.state;

		if(loading) {
			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
				
			)
		}
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Button
					onButtonPress={() => this.FacebookLogin()}
					backgroundColor="blue"
					title={'Login with Facebook'}
				/>
				<Button backgroundColor="orange" title={'Login with Email'} />
				<Button onButtonPress={() => this.props.navigation.navigate('SignUp')} title={'Sign Up  with Email'} />
			</View>
		);
	}
}
