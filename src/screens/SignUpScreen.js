import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import * as firebase from 'firebase';

export default class SignUpScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			gender: '',
			age: '',
			firstName: '',
			lastName: '',
			emailError: null
		}
	}

	handleEmail = (text) => {
		this.setState({
			email: text
		})
	}

	handlePassword = (text) => {
		this.setState({
			password: text
		})
	}

	handleFirstName = (text) => {
		this.setState({
			firstName: text
		})
	}

	handleLastName = (text) => {
		this.setState({
			lastName: text
		})
	}

	handleAge = (text) => {
		this.setState({
			age: text
		})
	}

	handleGender = (text) => {
		this.setState({
			gender: text
		})
	}

	checkEmail = () => {
		const { email } = this.state;
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const isValid = re.test(String(email).toLowerCase())

		if(!isValid) {
			this.setState({
				emailError: 'Invalid Email'
			})
		}
	}

	// signUpUser = () => {
	// 	firebase.auth().createUserWithEmailAndPassword('test@test.com', '12345678').then(user => console.log('user ', user))
	// }

	

	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={{ margin: 25 }}>
					<Input handleInput={this.handleEmail} onBlur={this.checkEmail} placeholder="Email" error={this.state.emailError} />
					
					<Input secureTextEntry={true}  handleInput={this.handlePassword} placeholder="Password" />	
					
					<View style={{ flexDirection: 'row' }}>
						<Input customStyle={{ flex: 1, marginRight: 5 }} handleInput={this.handleFirstName} placeholder="First Name" />
						<Input customStyle={{ flex: 1 }} handleInput={this.handleLastName} placeholder="Last Name" />
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Input customStyle={{ flex: 1, marginRight: 5 }} handleInput={this.handleAge} placeholder="Age" />
						<Input customStyle={{ flex: 1 }} handleInput={this.handleGender} placeholder="Gender" />
					</View>

					<Button onButtonPress={this.signUpUser} title="Sign Up" />

				</View>
				
			</ScrollView>
		);
	}
}
