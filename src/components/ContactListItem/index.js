import { Text,View,Image, StyleSheet,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

const ContactListItem = ({ user }) => {

    const navigation = useNavigation()

    console.log("user", user)
    
    return(
        <Pressable onPress={() => navigation.navigate("Chat",{ id: chat.id, name:chat.user.name })} style={styles.container}>
            <Image 
                source={{ uri: user.image}}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
                <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical:5,
        height:70,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray', 
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight:10
    },
    content:{
        flex: 1,
    },
    name:{
        fontWeight: 'bold'
    },
    subTitle:{
        color: 'gray'
    }
})

export default ContactListItem