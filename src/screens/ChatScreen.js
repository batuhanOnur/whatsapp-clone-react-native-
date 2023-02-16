import { ImageBackground, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native'
import InputBox from '../components/InputBox/Index'
import Message from '../components/Message'
import bg from '../assets/images/bg.png'
import messages from '../assets/data/messages.json'


const ChatScreen = () => {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList 
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={styles.list}
                    inverted
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg: {
        flex:1
    },
    list:{
        padding:10
    }
})