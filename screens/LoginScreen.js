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
import firebase from "firebase"
import {getData, storeData} from '../services/file.js'
import {RFValue} from "react-native-responsive-fontsize";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }
    async componentDidMount(){
        var id = await getData("user_id")
        if(id){
            this.props.navigation.navigate("DashboardScreen");
        }
    }

    login = (email, senha) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(async(response) => {
        var user = response.user
        await storeData("user_id",user.uid)
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
                    <Text style={styles.upperText}> Routinezer </Text>
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.textinputContainer}>
                        <Text style={styles.emailText}>
                            E-mail
                        </Text>
                        <TextInput
                            style={[
                                styles.textinput, {
                                    marginTop: RFValue(5)
                                }
                            ]}
                            placeholder={"Digite o email"}
                            placeholderTextColor={"#40416b"}
                            autoFocus
                            value={email}
                            onChangeText={text => this.setState({email: text})}/>
                            <Text style={styles.senhaText}>
                                Senha
                            </Text>
                        <TextInput
                            style={[
                            styles.textinput, {
                                marginTop: RFValue(5)
                            }
                        ]}
                            placeholder={"Digite a senha"}
                            placeholderTextColor={"#40416b"}
                            value={senha}
                            secureTextEntry
                            onChangeText={text => this.setState({senha: text})}/>
                        <TouchableOpacity
                            style={[
                            styles.button, {
                                marginTop: RFValue(20)
                            }
                        ]}
                            onPress={() => this.login(email, senha)}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.newCountText}>
                            Não possui uma conta?
                        </Text>
                        <Text onPress={() => this.props.navigation.navigate("Signup")} style={[styles.newCountText,{color:'#418dc6'}]}>
                            Criar conta
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    upperText:{
        fontSize:30,
        color: '#00054a',
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
    },
    textinput: {
        width: "90%",
        height: 55,
        padding: 10,
        borderColor: "#40416b",
        borderWidth: 1,
        borderRadius: 100,
        fontSize: 18,
        color: "#28284e",
        fontFamily: "Rajdhani_600SemiBold",
        backgroundColor: "#ffffff",
        justifyContent:'center',
        alignSelf:'center'
    },
    button: {
        width: "90%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2535ff",
        borderRadius: 100,
        alignSelf:'center',
        marginTop:RFValue(20)
    },
    buttonText: {
        fontSize: 24,
        color: "#edeeff"
    },
    newCountText:{
        fontSize: RFValue(15),
        color: "#22272E",
        marginTop: RFValue(10),
        alignSelf:"center"
    },
    emailText:{
        color:'#5e6776',
        fontSize:RFValue(15),
        marginLeft:RFValue(20),
        alignSelf:'flex-start'
    },
    senhaText:{
        color:'#5e6776',
        marginTop:RFValue(5),
        fontSize:RFValue(15),
        marginLeft:RFValue(20),
        alignSelf:'flex-start'
    }
});