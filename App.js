import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {Card} from 'react-native-paper';
import Employee from './components/Employee';
import Student from './components/Student';
import MyInfo from './components/MyInfo'
import { NavigationContainer } from '@react-navigation/native'; // For navigation from one screen to another
import { createNativeStackNavigator } from '@react-navigation/native-stack';// for stack navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Department from './components/Department';
import LikeDislikePage from './components/LikeDislikePage';
import SimpleCard from './SimpleCard';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const SignupForm = () => {
  const [email, setEmail] = React.useState(null);
  const [telephone, setTelephone] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [username, setUsername] = React.useState(null);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name='Student' component={Student}></Stack.Screen>
        <Stack.Screen name='Department' component={Department}></Stack.Screen>
      </Stack.Navigator> */}

      <Tab.Navigator initialRouteName='App'>
      <Tab.Screen name="LikeDislikePage" children={() => <LikeDislikePage name={"Hello!"} desc={"Heyy there, I am Furry \n Nice to meet you all\n I like to sleep all day long"}/>}/>
      <Tab.Screen name="MyInfo" component={MyInfo} />
      <Tab.Screen name="FacebookID" children={() => <SimpleCard item={{imageUrl:'https://c8.alamy.com/comp/EWE8F9/rowan-atkinson-mr-bean-EWE8F9.jpg', title:'Mr. Bean', description:'Mr. Bean is immature, self-absorbed, extremely competitive and brings various abnormal schemes and contrivances to everyday tasks.' }}/>}/>
        <Tab.Screen name="Student" component={Student} />
        <Tab.Screen name="Employee" component={Employee} />
      </Tab.Navigator>
      
    {/* <Card style={{flex:1, backgroundColor: '#87CEEB', alignContent: 'center', justifyContent: 'center', padding:50}}>
    <View style={styles.container}> 
      <Text style={styles.paragraph}>Sign Up Form</Text>
      <SafeAreaView>
        <Text style = {styles.formLabel}>User Name</Text>
        <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder = "User Name"
        />

        <Text style = {styles.formLabel}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder = "Email"
        keyboardType='email-address'
        textContentType='emailAddress'
        />

        <Text style = {styles.formLabel}>Telephone</Text>
        <TextInput
        style={styles.input}
        onChangeText={setTelephone}
        value={telephone}
        placeholder = "Telephone"
        />

        <Text style = {styles.formLabel}>Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder = "Password"
        textContentType='password'
        secureTextEntry={true}
        />
        <Button
          style={styles.button}
          title="Sign up"
          color="black"
          accessibilityLabel='Sign up'
        />
        <Student/>
        <Employee/>
        <UserRegisterPage name = "Diya"/>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
    </Card> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formLabel: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#7d5571'
  },
  input: {
    height: 40,
    marginBottom: 12,
    padding:8,
    borderWidth: 1,
  },
  button: {
    marginBottom: 12,
    padding: 8,
  }
});

export default SignupForm;