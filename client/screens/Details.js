import React from 'react';
import {TouchableOpacity , ScrollView,FlatList ,StyleSheet,SafeAreaView, Text,View, Image, Button } from 'react-native';

import { Appbar } from 'react-native-paper';
import * as Speech from 'expo-speech';


export default Details = ({ route, navigation }) => {
  const { item } = route.params;
  const speak = () => {
  	const thingToSay = item.Method;
      Speech.speak(thingToSay);
  };
  return (
    <ScrollView style={styles.containerRecipe}>
        {/*App Bar */ }
      <SafeAreaView>
        <Appbar.Header style = {styles.header}>
          <Appbar.Content title={item.title} />
          <Appbar.Action icon= 'dots-vertical' onPress={() => navigation.goBack()} />
        </Appbar.Header>
      </SafeAreaView>
      <View style = {styles.imgContainer}>
        <Image source={item.image} style = {styles.cardImg} />
      </View>
      <Text style={styles.headingRecipePage}>{item.title}</Text>
      <Text style={styles.headingRecipePage}>Category</Text>
      <Text style={styles.ContentRecipePage}>{item.Category}</Text> 
      <Text style={styles.headingRecipePage}>Cuisine</Text>
      <Text style={styles.ContentRecipePage}>{item.Cuisine}</Text>
      <View style = {styles.readmore}>
        <Image source= {require('../assets/ingredients.png')} style = {styles.readmore} />
      </View>
      <Text style={styles.ContentRecipePage}>{item.Ingredients}</Text>  
      <View style = {styles.readmore}>
        <Image source= {require('../assets/method.png')} style = {styles.readmore} />
      </View>
      <Text style={styles.ContentRecipePage}>{item.Method}</Text>
      {/* Play */}
      <TouchableOpacity  style = {styles.readmore} onPress={speak}>
        <Image source= {require('../assets/playrecipe.png')} style = {styles.readmore} />
      </TouchableOpacity>
    </ScrollView>
  );
};
// styling for this component
const styles = StyleSheet.create({
  containerRecipe : {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#9B1454',
    height : 80,
    flexDirection : 'row',
    paddingTop : 10,  
  },
  cardImg : {
    width : 150,
    height : 130,
  },
  imgContainer : {
    height : 130,
    width : 150,
    backgroundColor : 'pink',
  },
  headingRecipePage: {
    fontFamily: 'sans-serif', 
    fontSize : 16,
    fontWeight :'bold', 
    paddingHorizontal : 20,
  },
ContentRecipePage: {
  fontFamily: 'sans-serif', 
  fontSize : 15,
  paddingHorizontal : 20,
},
readmore:{
  marginBottom: 5,
  marginTop: 5,
  width: 120,
  height: 35,
  alignSelf : 'center',
},
});
