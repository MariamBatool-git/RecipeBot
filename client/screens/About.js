import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";



const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/aboutBackground(4).png')} resizeMode="cover" style={styles.b_image}>
      
        <Text style={styles.text}>Automate everyday cooking</Text>
        <Text style = {styles.text1}>Find the recipe according to your needs and get help from RecipeBot throughout cooking</Text>

      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  b_image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "#85586F",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
   
  },
  text1: {
    color: "#85586F",
    fontSize: 16,
    lineHeight: 40,
    textAlign: "center",
   
  },
  image : {
    width : 60,
    height : 60
  }
});

export default App;