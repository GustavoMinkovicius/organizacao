import React,  {Component}  from 'react';
import  {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity}  from 'react-native';
import firebase from 'firebase';
import {storeData} from '../services/file.js'
import { RFValue } from 'react-native-responsive-fontsize';

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
                <Text style={styles.cadastro}>
                    Cadastro
                </Text>
                <Text style={styles.textInput}>
                    Nome completo
                </Text>
                <TextInput
                style={styles.inputStyle}
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                />      
                <Text style={styles.textInput}>
                    E-mail
                </Text>
                <TextInput
                style={styles.inputStyle}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <Text style={styles.textInput}>
                    Senha
                </Text>
                <TextInput
                style={styles.inputStyle}
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15}
                secureTextEntry={true}
                />   
                <TouchableOpacity onPress={() => this.registerUser()} style={styles.button}>
                    <Text style={styles.cadastroText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
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
      backgroundColor: '#ffffff'
    },
    inputStyle:{ 
      width: '100%',
      height: 40,
      marginBottom:RFValue(15),
      alignSelf: "center",
      borderColor: "#ccc",
      borderColor: "#40416b",
      borderWidth: 1,
      borderRadius: 100,
      justifyContent:'center',
      alignSelf:'center'
    },
    textInput:{
        marginBottom:RFValue(5)
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
    },
    cadastro:{
        fontSize:RFValue(30),
        alignItems:'flex-start',
        color:'#01044b',
        marginBottom:RFValue(50)
    },
    button:{
        width: "90%",
        height: 55,
        padding: 10,
        borderColor: "#40416b",
        borderWidth: 1,
        borderRadius: 100,
        fontSize: 18,
        color: "#28284e",
        fontFamily: "Rajdhani_600SemiBold",
        backgroundColor: "#335dfe",
        justifyContent:'center',
        alignSelf:'center'
    },
    cadastroText:{
        fontSize: 24,
        color: "#fff",
        alignSelf:'center'
    }
  });