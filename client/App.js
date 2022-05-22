/*// In App.js in a new project

import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import Dashboard from './screens/Dashboard';
import Chat from './screens/Chat';
import Signin from './screens/SignIn';
import { LogBox } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
// Ignore log notification by message
LogBox.ignoreLogs(['new NativeEventEmitter']); 
//Ignore all log notifications
LogBox.ignoreAllLogs(); 

const Stack = createNativeStackNavigator();

class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name = "Chat" component={Chat} options={{
          title: 'RecipeBot',
          headerStyle: {
            backgroundColor: '#AC7D88',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'normal',
          }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}
export default App;*/
import React from 'react';
// wrap whole application in a navigation container
import { NavigationContainer } from '@react-navigation/native';
// to create stack of screens for navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// necessary components from react native
import { Image } from 'react-native';
// importing screens for the project
import Dashboard from './screens/Dashboard';
import Chat from './screens/Chat';
import Details from './screens/Details';
import Profile from './screens/Profile';
import Blog from './screens/Blog';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { LogBox } from 'react-native';
import styles from './screens/styles/styles';
import About from './screens/About';


//naviagate to screens using bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Ignore log notification by message
LogBox.ignoreLogs(['new NativeEventEmitter']); 
//Ignore all log notifications
LogBox.ignoreAllLogs();

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SignInStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();
const SignUpStack = createNativeStackNavigator();




const HomeStackScreen =() => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false,}}/>
    <HomeStack.Screen name="Details"   component={Details} options={{headerShown: false,}}/>
    <HomeStack.Screen name="Blog" component={Blog} options={{headerShown : false,}}/>
    <HomeStack.Screen name="SignIn" component={SignIn} options={{headerShown : false,}}/> 
  </HomeStack.Navigator>
);
const ChatStackScreen =() => (
  <ChatStack.Navigator>
    <ChatStack.Screen name="Chat" component={Chat} 
      options={
        {headerShown: false, 
        title: 'RecipeBot',
        headerStyle: {
          backgroundColor: '#AC7D88',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'normal',
        }
        }
      }
    />
    </ChatStack.Navigator>
);
const ProfileStackScreen =() => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile"  component={Profile} options={{headerShown: false,}}/>
  </ProfileStack.Navigator>
);
const SignInStackScreen =() => (
  <SignInStack.Navigator>
    <SignInStack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}}/>
    <SignInStack.Screen name = "Tabs" component={TabLayout} options = {{headerShown : false}}/>
    <SignUpStack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}}/>
  </SignInStack.Navigator>
);
const TabLayout = () => (
  <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={HomeStackScreen} 
        options={
          {
            headerShown : false,
            tabBarLabel: 'Dashboard',
            tabBarIcon: () => (
              <Image style = {styles.icon2} source = {require('./assets/home.png')}/>
            )
          }
        } 
      />
      <Tabs.Screen name="Profile" component={ProfileStackScreen} 
        options={
          {
            title: 'Profile',
            headerStyle: {
            backgroundColor: '#9B1454',
          },
          headerTitleStyle :{ color : '#FAEAEB' ,},
          tabBarIcon: () => (
            <Image style = {styles.icon2} source = {require('./assets/profile.png')}/>
          )
          }
        }
      />
      <Tabs.Screen name="Chat" component={ChatStackScreen} 
        options={
          {
            title: 'Chat',
            headerTitleStyle :{ color : '#FAEAEB' ,},
            headerStyle: {
              backgroundColor: '#9B1454',
            },
            tabBarLabel: 'Chat',
            headerLeft: () => 
              <Image style = {styles.backicon} source = {require('./assets/back.png')} />,
            tabBarIcon: () => (
              <Image style = {styles.icon2} source = {require('./assets/chatlogo.png')}/>
            )
          }
        } 
      />
      <Tabs.Screen name="About" component={About} 
        options={{
          headerShown : false,
        tabBarLabel: 'About',
        tabBarIcon: () => (
          <Image style = {styles.icon2} source = {require('./assets/logo.png')}/>
        )
        }}/>
  </Tabs.Navigator>
);
const App = () => {
  
  return (
    <NavigationContainer>
        <SignInStackScreen/>
    </NavigationContainer>
  );
}
export default App;