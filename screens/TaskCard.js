import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
// import firebase from "firebase";
 
export default class TaskCard extends Component {
    render() {
        let task = this.props.task
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate("TaskScreen", {task: task})}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.storyTitleText}>
                            {task.titulo}
                        </Text>
                          <Text style={styles.storyAuthorText}>
                            {task.status}
                        </Text>
                        <Text style={styles.descriptionText}>
                            {task.descricao}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android"
            ? StatusBar.currentHeight
            : 0
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    cardContainerLight: {
        margin: RFValue(13),

        backgroundColor: "white",
        borderRadius: RFValue(20),
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: RFValue(0.5),
        shadowRadius: RFValue(5),
        elevation: RFValue(2)
    },
    storyImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
    },
    titleTextContainer: {
        flex: 0.8
    },
    iconContainer: {
        flex: 0.2
    },
    storyTitleText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        color: "white"
    },
    storyTitleTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        color: "black"
    },
    storyAuthorText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "white"
    },
    storyAuthorTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "black"
    },
    descriptionContainer: {
        marginTop: RFValue(5)
    },
    descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(13),
        color: "white"
    },
    descriptionTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(13),
        color: "black"
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    dislikedButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderWidth: 2,
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    },
    likeTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});
