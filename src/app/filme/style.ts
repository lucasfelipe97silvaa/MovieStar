import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }, 
    title:{
        color: '#ffff',
        fontFamily: 'Helvetica',
        fontSize: 30,
        fontWeight: 'bold',
        borderColor: 'Button #ffff'
    },
    description:{
        color: '#ffff',
        fontFamily: 'Helvetica',
    },
    box:{
        marginTop: 10,

    },
    vote:{
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold',
    }
})