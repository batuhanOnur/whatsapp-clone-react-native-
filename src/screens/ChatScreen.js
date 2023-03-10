import { ImageBackground, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native'
import { useEffect  } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import InputBox from '../components/InputBox/Index'
import Message from '../components/Message'
import bg from '../assets/images/bg.png'
import messages from '../assets/data/messages.json'


const ChatScreen = () => {

    const route = useRoute()
    const navigation = useNavigation()

    useEffect(()=>{
        navigation.setOptions({
            title: route.params.name
        })
    },[route.params.name])

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
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