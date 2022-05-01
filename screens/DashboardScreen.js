import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import TaskCard from "./TaskCard";

import {FlatList} from "react-native-gesture-handler";
// import firebase from "firebase";

let tasks = require("../temp_tasks.json");

export default class DashboardScreen extends Component {

    renderItem = ({item: task}) => {
        return <TaskCard task={task} navigation={this.props.navigation}/>;
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
                        {/* <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image> */}
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>
                            organização
                        </Text>
                    </View>
                </View>
                {!tasks[0]
                    ? (
                        <View style={styles.noneStory}>
                            <Text style={styles.noneStoryText}>Nenhuma Tarefa disponível
                            </Text>
                        </View>
                    )
                    : (
                        <View style={styles.cardContainer}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={tasks}
                                renderItem={this.renderItem}/>
                        </View>
                    )}

                <View style={{
                    flex: 0.08
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c"
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
        flexDirection: "row"
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
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    },
    noneStory: {
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noneStoryText: {
        color: 'white',
        fontSize: RFValue(40)
    },
    noneStoryTextLight: {
        color: 'black',
        fontSize: RFValue(40)
    }
});
