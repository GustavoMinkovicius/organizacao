import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import TaskCard from "./TaskCard";
import {FlatList} from "react-native-gesture-handler";
import {getData} from '../services/file.js'
import {getTasks} from  '../services/tasks'
// import firebase from "firebase";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[]
        };
    }
    async componentDidMount(){
        var id = await getData("user_id")
        var x = await  getTasks(id)
        this.setState({tasks:x})
    }
    renderItem = ({item: tasks}) => {
        return <TaskCard task={tasks} navigation={this.props.navigation}/>;
    };

    keyExtractor = (item, index) => index.toString();

    //   fetchstories = () =>{     firebase.database().ref('/posts/').on("value",
    // snapshot => {       var stories = []       if(snapshot.val()){
    // Object.keys(snapshot.val()).forEach(function(key){           stories.push({
    //         key:key,             value:snapshot.val()[key]           }) })
    // }       this.setState({stories:stories}); this.setUpdateToFalse()       },
    //    function(Error){ console.log('error') //caso aconteça algum problema
    // });   }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Logout")}>
                            <Image source={require("../assets/logout.png")} style={styles.iconImage}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>
                            Routinezer
                        </Text>
                    </View>
                    <View style={styles.appIcon}>
                        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate("CreateTaskScreen")}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {!this.state.tasks[0]
                    ? (
                        <View style={styles.noneTask}>
                            <Text style={styles.noneTaskText}>Nenhuma Tarefa disponível
                            </Text>
                        </View>
                    )
                    : (
                        <View style={styles.cardContainer}>
                            <View style={styles.flat}>
                                <View style={styles.contsk}>

                                </View>
                                <FlatList
                                    keyExtractor={this.keyExtractor}
                                    data={this.state.tasks}
                                    renderItem={this.renderItem}/>
                            </View>
                        </View>
                    )}
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
    appTitle: {
        flex: 0.07,
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center",
        alignSelf:'center'
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        alignSelf:'flex-start',
    },
    appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    },
    noneTask: {
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noneTaskText: {
        color: 'white',
        fontSize: RFValue(40)
    },
    noneTaskTextLight: {
        color: 'black',
        fontSize: RFValue(40)
    },
    addButtonText:{
        color:'white',
        fontSize: RFValue(30),
        alignSelf:'center',
        fontWeight:'bold'
    },
    addButton:{
        marginRight:RFValue(20)

    },  
    addView:{
        alignSelf:'flex-end',
    },
    flat:{
        backgroundColor:'#f7f7ff',
        borderTopStartRadius:100/2,
        borderTopEndRadius:100/2
    },
    contsk:{

    }
});
