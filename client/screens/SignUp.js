import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
const SignUp = ({navigation}) =>{
      return(
          <View style = {styles.containerStyle}>
            <Image source = {require("../assets/logo.png")} style = {styles.logo}/>
            
            <View style = {styles.inputs}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value={this.state.text}
                placeholder="Email address"
                keyboardType="default"
              />
              <TextInput
                secureTextEntry = {true}
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value={this.state.text}
                placeholder="Password"
                keyboardType="default"
              />
            </View>
            <TouchableOpacity style = {styles.button} onPress = {()=>{navigation.navigate("SignIn")}}>
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style = {styles.text}>
              Already have an account?
            </Text>
            <Text 
              onPress = {()=>{navigation.navigate("SignIn")}}
              style = {styles.signupButton}
            >
              Sign in here!
            </Text>
            
          </View>
        );
} 
export default SignUp;
const styles = StyleSheet.create({
  containerStyle : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : "#ffffff"
  },
  heading : {
    fontSize : 20,
    fontWeight : '600'
  },
  emptyContainer : {
    backgroundColor : 'red',
    height : 100,
  },
  input: {
    height: 40,
    width : 250,
    margin: 12,
    borderBottomWidth : 0.5,
    padding: 10,
  },
  inputs : {
    marginTop : 10
  },
  logo : {
    height : 120,
    width : 120
  },
  button : {
    width : 200,
    marginTop : 20,
    elevation: 8,
    backgroundColor : '#85586F',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText : {
    fontSize: 16,
    color: "#fff",
    textTransform : 'uppercase',
    alignSelf: "center",
   
  },
  text : {
    marginTop : 5
  },
  signupButton : {
    fontWeight : 'bold'
  }
});