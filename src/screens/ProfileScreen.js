import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/common/Button';
import * as firebase from 'firebase'

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text> ProfileScreen </Text>
        <Button title="Sign Out" onButtonPress={() => firebase.auth().signOut()} />
      </View>
    )
  }
}