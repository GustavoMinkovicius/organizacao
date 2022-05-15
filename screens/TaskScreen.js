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
    TouchableOpacity
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";


 
export default class TaskScreen extends Component {
    // componentDidMount() {
    //     // this.fetchUser();
    // }

    // fetchUser = () => {
    //     let theme;
    //     firebase
    //         .database()
    //         .ref("/users/" + firebase.auth().currentUser.uid)
    //         .on("value", snapshot => {
    //             theme = snapshot
    //                 .val()
    //                 .current_theme;
    //             this.setState({
    //                 light_theme: theme === "light"
    //             });
    //         });
    // };

    render() {
        let task = this.props.navigation.state.params.task
        // let task = {
        //     "titulo": "Trabalho de Quimica",
        //     "data_cadastro": "25/01/2021",
        //     "data_limite": "05/05/2022",
        //     "data_conclusao":"25/12/2022",
        //     "status":"Concluido",
        //     "descricao": "Fazer o trabalho de Quimica da pág. 147 a 153."
        //   }
            return (
                // <View>
                //     <Text>teste</Text>
                // </View>
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>

                        <Text style={styles.appTitleText}>Organização</Text>
                           
                    </View>
                    <View style={styles.storyContainer}>
                        <ScrollView style={styles.storyCard}>   
                            <View style={styles.titleTextContainer}>
                                <Text style={styles.storyTitleText}>
                                    {task.titulo}
                                </Text>
                                <View style={styles.StatusTask}>
                                    <Text style={styles.storyAuthorText}>
                                        <b>Data Limite: </b>{task.data_limite}
                                    </Text>
                                    <Text style={styles.storyAuthorText}> 
                                        <b>Status: </b>{task.status}
                                    </Text> 
                                </View>
                                    <Text style={styles.taskStatus}>
                                        <b>Descrição: </b> {task.descricao}
                                    </Text>
                                    {task.status==='Concluído' && <Text style={styles.taskStatus}>
                                        <b>Concluído em: </b> {task.data_conclusao}
                                    </Text>}
                            </View>
                        </ScrollView>
                        <View>
                        <TouchableOpacity 
                            style={[styles.button, {backgroundColor:'red', marginBottom:RFValue(35)}]}
                            // onPress={() => this.props.navigation.navigate('DashboardScreen')}
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
