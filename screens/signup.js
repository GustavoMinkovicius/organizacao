import React,  {Component}  from 'react';
import  {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator}  from 'react-native';
import firebase from 'firebase';
import {storeData} from '../services/file.js'

export default class Signup extends Component {
  
    constructor() {
        super();
        this.state =  {
        displayName: '',
        email: '', 
        password: '',
        isLoading: false
        }
    }
  

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
  

    registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter details to signup!')
        }
        else{
        this.setState({
            isLoading: true,
            })
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(async(res) =>{ 
            var user = res.user
            await storeData("user_id",user.uid)
            this.props.navigation.navigate("DashboardScreen")
        }).catch(error => error.code === "auth/email-already-in-use" ? Alert.alert("Usuario já cadastrado") 
        : Alert.alert("aconteceu um erro na criação do usuario")
        )      
            }
    }
    render () {
        if(this.state.isLoading){
        return(
        <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
        )}
        return(
            <View style={styles.container}>  
            <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
            />      
            <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
            />   
            <Button
            color="#3740FE"
            title="Signup"
            onPress={() => this.registerUser() }
            />

            <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            Já tem um usuario? Clique aqui
            </Text>                          
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle:{ 
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText:{ 
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader:{ 
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });