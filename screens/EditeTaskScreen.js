import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Button
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import CalendarPicker from 'react-native-calendar-picker';
import {addTasks} from '../services/tasks'
import {getData} from '../services/file' 
import firebase from 'firebase'
import moment from "moment";

export default class EditeTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_limite: '',
            descricao: '',
            titulo: '',
            id:[]
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    async editTask(id){
        await firebase.firestore().collection('task').doc(id).update({
            data_limite: this.state. data_limite,
            descricao: this.state.descricao,
            titulo: this.state.titulo
          })   
    }
    componentDidMount(){
        let task = this.props.navigation.state.params.task
        this.setState({
            data_limite: task.data_limite,
            descricao: task.descricao,
            titulo: task.titulo
        })
        this.setState({id:task})
    }

    onDateChange(date) {
        this.setState({data_limite: moment(date).toDate()})
      }
      async componentDidMount(){
        var id = await getData("user_id")
        this.setState({tasks:id})
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('TaskScreen')}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={styles.appTitleText}>Nova atividade</Text>
                </View>
                <View>
                    <TextInput
                    style={[
                        styles.input, {
                            marginBottom: 20
                        }]}
                    
                    placeholder="Nome da  atividade"
                    placeholderTextColor={"#FFFFFF"}
                    value={this.state.titulo}
                    onChangeText={text => this.setState({titulo: text})}
                    />
                    <TextInput
                    style={[
                        styles.input, {
                            marginBottom: 20,
                            height: 150,
                            textAlignVertical:'top'
                        }]}
                    numberOfLines={5}
                    multiline
                    placeholder="Descrição"
                    placeholderTextColor={"#FFFFFF"}
                    value={this.state.descricao}
                    onChangeText={text => this.setState({descricao: text})}
                    />
                    <View>
                        <Text style={styles.data}>Selecione a Data Limite: </Text>
                        <TouchableOpacity onPress={this.props.navigation.navigate('DataScreen')}/>
                    <CalendarPicker onDateChange={this.onDateChange}/>
                    </View>
                   
                </View>
                <View>
                <TouchableOpacity style={[styles.buttonAdd, {backgroundColor:'green', marginBottom:RFValue(35)}]}
                            onPress={() => this.props.navigation.navigate('DashboardScreen') && this.editTask()}>
                            
                            <Text style={styles.buttonTextAdd}>Editar</Text>
                        </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5f97af"
    },
    containerLight: {
        flex: 1,
        backgroundColor: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android"
            ? StatusBar.currentHeight
            : RFValue(35)
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:20
    },
    image: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
    },
    iconContainer: {
        flex: 0.2
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(10),
        alignItems:'center',
        alignSelf:'center'
    },
    button: {
        width: "20%",
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2f345d",
        borderRadius: 15,
        marginLeft: RFValue(20),
    },
    buttonText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold"
    },
    input: {
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
        marginLeft: RFValue(20)
      },
    buttonAdd: {
        width: "40%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        backgroundColor: "#2f345d",
        borderRadius: 15
    },
    buttonTextAdd: {
        fontSize: 24,
        color: "#cfeff7",
        fontFamily: "Rajdhani_600SemiBold"
    },
    data:{
        fontSize:18,
        color:'#fff',
        justifyContent:'center',
        marginLeft: RFValue(20)

    }
});