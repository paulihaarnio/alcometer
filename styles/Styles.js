import { StyleSheet } from "react-native";

export default StyleSheet.create({
    all:{
       backgroundColor:'#e3d6d5' 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 100
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        width:200,
        borderRadius:30,
        backgroundColor:'white'
    },
    label:{
        fontSize: 18,
        fontWeight: "bold",
        color:'#84ade3'
    },
    aresult:{
        color: 'green',
        fontSize: 68,
        fontWeight: "bold"
    },
    bresult:{
        color: 'yellow',
        fontSize: 68,
        fontWeight: "bold"
    },
    cresult:{
        color: 'red',
        fontSize: 68,
        fontWeight: "bold"
    },
     radioStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    header:{
        fontSize: 40,
        fontWeight:'bold',
        color:'green'
    },
    Button:{
        borderRadius:10,
        backgroundColor:'#6f490f'
    },
    ButtonText:{
        fontSize:40,
        padding:10
    },
    DarkButton:{
        borderRadius:10,
        backgroundColor:'#f4e9d9'
    },
    NumericInput:{
        borderRadius:100,
    },
    darktheme:{
        backgroundColor:'#694303',
    },
});