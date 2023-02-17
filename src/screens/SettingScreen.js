import { Button, StyleSheet, Text, View } from 'react-native'
import { Auth } from 'aws-amplify'

const SettingScreen = () => {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={ () => Auth.signOut() } title="Sign Out"/>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})