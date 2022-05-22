import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const Card = (props, navigation)=>{
    return(
      <View style = {styles.cardContainer}>
        <View style = {styles.imgContainer}>
          <Image style = {styles.cardImg} source = {props.imagePath}/>
        </View>
        <View>
          <Text style = {styles.heading}>{props.recipeName}</Text>
        </View>
        <View>
          <Button 
            title="Start Cooking"
            color="#85586F"
            onPress  = {()=> {
              navigation.navigate("Details");
            }}
            />
        </View>
      </View>
    );
  }
export default Card;
const styles = StyleSheet.create({
    cardContainer: {
        width : 150,
        height : 250,
        alignItems : 'center',
        paddingTop : 5,
        paddingLeft: 5,
        paddingRight : 5,
        backgroundColor : '#FFDAC7',
        borderRadius : 10,
        marginRight : 5 
       
      },
      imgContainer : {
        height : 130,
        width : 140,
        backgroundColor : 'pink'
      },
      cardImg : {
        width : 140,
        height : 130
      },
      heading: {
        fontSize: 18,
        fontWeight: '600',
        color : '#85586F',
        marginBottom: 13,
        height : 50
      },
});
