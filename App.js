import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { useEffect } from 'react';
import Navigator from './src/navigation';
import { Amplify,Auth, API,graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';
import { getUser } from './src/graphql/queries'
import { createUser } from './src/graphql/mutations'

Amplify.configure({...awsconfig,Analytics: { disabled: true }})

function App() {

  useEffect(()=> {
      const syncUser = async () => {
        //GET AUTH USER
          const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
        //QUERY WITH USER ID
          const userData  = await API.graphql(graphqlOperation(getUser,{ id: authUser.attributes.sub }))

          if(userData.data.getUser){
            console.log("user already exist")
            return
          }
        //IF NO USER CREATE ONE
          
          const newUser={
            id: authUser.attributes.sub,
            name: authUser.attributes.phone_number,
            status: 'Hey there!'
          }

          const newUserResponse = await API.graphql(
            graphqlOperation(createUser,{ input: newUser})
          )
      }

      syncUser()
  },[])

  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}


export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
