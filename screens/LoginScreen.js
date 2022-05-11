import React, {Component} from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    ToastAndroid,
    Alert
} from "react-native";

import firebase from "firebase";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }

    login = (email, senha) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        this.props.navigation.navigate("DashboardScreen");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
    }

    render() {
        const {email, senha} = this.state
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.upperContainer}>
                    <Text style={styles.upperText}> Organização </Text>
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.textinputContainer}>
                        <TextInput
                            style={styles.textinput}
                            placeholder={"Digite o email"}
                            placeholderTextColor={"#FFFFFF"}
                            autoFocus
                            value={email}
                            onChangeText={text => this.setState({email: text})}/>
                        <TextInput
                            style={[
                            styles.textinput, {
                                marginTop: 20
                            }
                        ]}
                            placeholder={"Digite a senha"}
                            placeholderTextColor={"#FFFFFF"}
                            value={senha}
                            secureTextEntry
                            onChangeText={text => this.setState({senha: text})}/>
                        <TouchableOpacity
                            style={[
                            styles.button, {
                                marginTop: 20
                            }
                        ]}
                            onPress={() => this.login(email, senha)}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5f97af"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    upperText:{
        fontSize:30,
        color: '#180101',
        fontWeight:'bold'
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
        
    },
    appIcon: {
        width: 280,
        height: 280,
        resizeMode: "contain",
        marginTop: 80
    },
    appName: {
        width: 130,
        height: 130,
        resizeMode: "contain"
    },
    lowerContainer: {
        flex: 0.5,
        alignItems: "center"
    },
    textinput: {
        width: "75%",
        height: 55,
        padding: 10,
        borderColor: "#FFFFFF",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold",
        backgroundColor: "#5653D4",
        justifyContent:'center',
        alignSelf:'center'
    },
    button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2f345d",
        borderRadius: 15,
        alignSelf:'center'
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold"
    }
});