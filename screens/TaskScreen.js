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

let task = require("../temp_tasks.json");
 
export default class TaskScreen extends Component {
    
    // componentDidMount() {
    //     this.fetchUser();
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
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.appTitle}>

                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Organização</Text>
                        </View>
                    </View>
                    <View style={styles.storyContainer}>
                        <ScrollView style={styles.storyCard}>   
                            <View style={styles.dataContainer}>
                                <View style={styles.titleTextContainer}>
                                    <Text style={styles.storyTitleText}>
                                        {task.titulo}
                                    </Text>
                                    <Text style={styles.storyAuthorText}>
                                        {task.data_limite}
                                    </Text>
                                    <Text style={styles.storyAuthorText}>
                                        {task.data_cadastro}
                                    </Text>
                                    <Text style={styles.storyAuthorText}>
                                        {task.data_conclusao}
                                    </Text>
                                </View>
                                <View style={styles.iconContainer}></View>
                            </View>
                            <View style={styles.storyTextContainer}>
                                <Text style={styles.storyText}> Status: 
                                    {task.status}
                                </Text>
                                <Text style={styles.moralText}>
                                    descrição: {task.descricao}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                            </View>
                        </ScrollView>
                    </View>
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
    appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
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
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
    },
    storyContainer: {
        flex: 1
    },
    storyCard: {
        margin: RFValue(20),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    storyCardlight: {
        margin: RFValue(20),
        backgroundColor: "white",
        borderRadius: RFValue(20),
        shadowColor: 'black',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2
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
        flex: 0.8
    },
    storyTitleText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        color: "white",
        alignItems:'center',
        alignSelf:'center'
    },
    storyTitleTextlight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        color: "black",
        alignItems:'center',
        alignSelf:'center'
    },
    storyAuthorText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "white",
        alignItems:'center',
        alignSelf:'center'
    },
    storyAuthorTextlight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "black",
        alignItems:'center',
        alignSelf:'center'
    },
    iconContainer: {
        flex: 0.2
    },
    storyTextContainer: {
        fontSize: RFValue(20),
        color: "white",
        alignItems:'center',
        alignSelf:'center'
    },
    storyText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(20),
        color: "white",
        alignItems:'center',
        alignSelf:'center'
    },
    storyText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(20),
        color: "white",
        alignItems:'center',
        alignSelf:'center'
    },
    moralText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(20),
        color: "white",
        alignItems:'center',
        alignSelf:'center'
    },
    moralTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(20),
        color: "black",
        alignItems:'center',
        alignSelf:'center'
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(10),
        alignItems:'center',
        alignSelf:'center'
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(30)
    },
    dislikedButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    },
    likeThemeLight: {
        color: "black",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});
