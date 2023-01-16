import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        marginTop: 50
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        width:200
    },
    label:{
        fontSize: 18,
        fontWeight: "bold"
    },
    result:{
        color: '#b00000',
        fontSize: 18,
        fontWeight: "bold"
    },
     radioStyle:{
        flexDirection: 'row',
         alignItems: 'center'
    },
    header:{
        fontSize: 40
    },
    button:{
        borderRadius: 30
    }
});