import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from 'firebase'
import {RemoveData} from  '../services/file.js'

export default class Logout extends Component {
    componentDidMount(){
        firebase.default.auth().signOut().then(async function() {
          await RemoveData("user_id")
        }, function(error) {
          console.error('Sign Out Error', error);
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
