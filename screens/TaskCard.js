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
                onPress={() => this.props.navigation.navigate("TaskScreen", {atividade: task})}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={[styles.cardContainer,{backgroundColor:"#fff"}]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.storyTitleText}>
                            {task.titulo}
                        </Text>
                            <Text style={styles.descriptionText}>
                                {task.descricao}
                            </Text>
                        <View style={styles.viewImage}>
                            <Image source={task.status === 'Pendente'? "../assets/pendente.png": "../assets/concluido.png"} style={styles.iconImage}/>
                        <Text style={styles.storyAuthorText}>
                            {task.status}
                        </Text>
                        </View>
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
    container:{
        margin:5,
        borderRadius:20,
        borderColor:'black'
    },
    cardContainer: {
        margin: RFValue(10),
        borderRadius: RFValue(20),
        borderColor:'#98c8af',
        borderWidth:5
    },
    cardContainerLight: {
        margin: RFValue(13),
        backgroundColor: "black",
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
        padding: RFValue(20),
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
        color: "#208ad8",
        marginBottom: RFValue(10),
        fontWeight:'bold'
    },
    storyTitleTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        color: "black"
    },
    storyAuthorText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(15),
        color: "#84829e",
        marginLeft:RFValue(5)
    },
    storyAuthorTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "black",
        marginLeft:RFValue(5)
    },
    descriptionContainer: {
        marginTop: RFValue(5)
    },
    descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "#000000",
        margin:RFValue(7)
    },
    descriptionTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(13),
        color: "black",
        margin:RFValue(7)
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
    iconImage: {
        height: 40,
        width: 40,
        resizeMode: "center",
        alignSelf:'flex-end'

    },
    viewImage:{
        justifyContent:'center',
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
