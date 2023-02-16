import { useState } from 'react'
import { StyleSheet,View,TextInput } from 'react-native'
import { AntDesign,MaterialIcons } from '@expo/vector-icons'

const InputBox = () => {

    const [newMessage, sendNewMessage] = useState("");

    const onSend = () => {
        console.warn("sending", newMessage)
        sendNewMessage("");
    }

    return (
        <View style={styles.container}>
            {/* Icon */}
            <AntDesign name="plus" size={24} color='royalblue'/>
            {/* Input */}
            <TextInput 
                value={newMessage} 
                onChangeText={sendNewMessage} 
                style={styles.input} 
                placeholder='type...'
            />
            {/*  Right Icon*/}
            <MaterialIcons onPress={onSend} style={styles.send} name='send' size={20} color='white'/>
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding:5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input:{
        flex:1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth
    },
    send:{
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'
    }
})