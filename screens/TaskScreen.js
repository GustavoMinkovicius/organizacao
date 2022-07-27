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
    Alert
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {getTasks} from  '../services/tasks'
import {getData} from '../services/file.js'
import { deleteTask } from "../services/clear";
import firebase from 'firebase'
import moment from "moment";

export default class TaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
        };
    } 
    async componentDidMount(){ 
        var id = await getData("user_id") 
        var x = await  getTasks(id)
       
        
        this.setState({db:x})
        let task = this.props.navigation.state.params.atividade

        task.data_atividade = new Date(task.data_limite.seconds * 1000 + task.data_limite.nanoseconds/1000000).toLocaleDateString()
        {task.status==="Concluído"?

        task.data_atividadeC = new Date(task.data_conclusao.seconds * 1000 + task.data_conclusao.nanoseconds/1000000).toLocaleDateString()
        : task.data_atividadeC = null}

        this.setState({tasks:task})

    }   
    async concluirTask(id){
        await firebase.firestore().collection('task').doc(id).update({
            status: "Concluído",
            data_conclusao: new Date()
          })   
    }
    async deletTask(apagar){
        var confirmar  
        Alert.alert("Deseja apagar a atividade?"
            [
                {
                    text: "Não",
                    onPress: () => confirmar = 'não',
                    style: "cancel"
                },
                { text: "Sim", onPress: () => confirmar = 'sim'}    
            ]
        );
        confirmar === 'não'? confirmar = '' :
        await deleteTask(apagar.id)
        this.props.navigation.navigate('DashboardScreen')}
    
    render() {
        const {tasks} = this.state
        // var teste  = firebase.firestore.Timestamp.data_limite.toDate()
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.appTitleText}>Routinezer</Text>
                       
                </View>
                <View style={styles.storyContainer}>
                    <ScrollView style={styles.storyCard}>   
                        <View style={styles.titleTextContainer}>
                            <Text style={styles.storyTitleText}>
                                {tasks.titulo}  
                            </Text>
                            <View style={styles.StatusTask}> 
                                <Text style={styles.storyAuthorText}>
                                    <b>Data Limite: </b>{tasks.data_atividade}
                                </Text>
                                <Text style={styles.storyAuthorText}> 
                                    <b>Status: </b>{this.state.tasks.status}
                                </Text> 
                            </View>
                                <Text style={styles.taskStatus}>
                                    <b>Descrição: </b> {this.state.tasks.descricao}
                                </Text>
                                {tasks.status==="Concluído" && <Text style={[styles.taskStatus]}>
                                    <b>Concluído em: </b> {tasks.data_atividadeC}
                                </Text>}

                                {tasks.status==='Pendente' && <TouchableOpacity style={[styles.buttonC,{backgroundColor:'green', marginTop:RFValue(35)}]} 
                                onPress={()=>  this.concluirTask(tasks.id) && this.props.navigation.navigate('DashboardScreen')}>
                                    <Text style={styles.buttonText}> Concluir </Text>
                                </TouchableOpacity> }
                                <TouchableOpacity  
                                    style={[styles.buttonC, {backgroundColor:'#07174a', marginTop:RFValue(45)}]}
                                    onPress={() => this.props.navigation.navigate('EditeTask', {task: tasks})}>
                                    <Text style={styles.buttonText}> Editar atividade </Text>
                                </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View>
                    <TouchableOpacity 
                        style={[styles.button, {backgroundColor:'red', marginBottom:RFValue(35)}]} 
                        onPress={() => this.deletTask(tasks)}
                        >
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                    </View>
                </View>      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00abd6"
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
        textAlign:'center'
    },
    storyContainer: {
        flex: 1
    },
    storyCard: {
        margin: RFValue(20),
        borderRadius: RFValue(20)
    },
    image: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
    },
    dataContainer: {
        flexDirection: "row",
        padding: RFValue(20)
    },
    titleTextContainer: {
        flex: 1
    },
    storyTitleText: {
        fontSize: RFValue(25),
        color: "white",
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        fontWeight:'bold'
    },
    storyAuthorText: {
        fontSize: RFValue(18),
        color: "white",
        margin:5, 
        width:140,
       
    },
    storyText: {
        fontSize: RFValue(20),
        color: "white",
        marginLeft:10  
    },
    iconContainer: {
        flex: 0.2
    },
    storyTextContainer: {
        fontSize: RFValue(20),
        color: "white",
        marginTop:20
    },
    moralText: {
        fontSize: RFValue(18),
        color: "white",
        alignItems:'center',
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,
        marginHorizontal:5
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(10),
        alignItems:'center',
        alignSelf:'center'
    },
    viewTaskStatus:{
        width:150,
        height:50,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:50
    },
    taskStatus:{
        fontSize: RFValue(18),
        color: "white",
        marginVertical:10,
        justifyContent:'center',
        marginHorizontal:5
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
    buttonC: {
        width: "40%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:'center',
        backgroundColor: "#2f345d",
        borderRadius: 15
    },
    buttonText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold"
    },
    StatusTask:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    }
});
