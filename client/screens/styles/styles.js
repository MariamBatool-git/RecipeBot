import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as Font from "expo-font";
import { useFonts } from 'expo-font';
// styling for this component

export default StyleSheet.create({
   
  AppbarTitle : {
    fontFamily: 'sans-serif', 
      fontSize : 20,
      fontWeight :'bold', 
      paddingHorizontal : 20,
      color : '#FAEAEB'
  },
    headerWrapper: {
      
     flexDirection : 'row-reverse',

     
    },
    coverImageStyle : {
      height : 200,
      width : '100%',
      alignSelf : 'center',
      marginBottom : 10,
    },
    titleImageStyle : {
      height : 50,
      width : '100%',
      alignSelf : 'center',
      marginBottom : 10,
    },
    blogImageStyle : {
      height : 130,
      width : 200,
      alignSelf : 'center',
    },
   
    TitleWrapper : {
      marginTop: 30,
    },
    CategoryWrapper : {
      marginTop: 20,
    },
    CategoryTitle: {
      fontFamily: 'sans-serif', 
      fontSize : 20,
      fontWeight :'bold', 
      paddingHorizontal : 20,
      
    },
    ContentRecipePage: {
      fontFamily: 'sans-serif', 
      fontSize : 15,
     
      paddingHorizontal : 20,

      
    },
    categoryItemTitle : {
      fontFamily: 'sans-serif', 
      fontSize : 15,
      paddingTop : 10,
      alignSelf : 'center',
      fontWeight :'bold', 

        
    },
   disclaimertext: {
      fontFamily: 'sans-serif', 
      fontSize : 15,
      paddingTop : 10,
      alignSelf : 'center',
      fontWeight :'bold', 
      fontStyle: 'italic',

        
    },
    headingRecipePage: {
      fontFamily: 'sans-serif', 
      fontSize : 16,
      fontWeight :'bold', 
      paddingHorizontal : 20,
       
      
    },
    header: {
      
      backgroundColor: '#9B1454',
      height : 80,
      flexDirection : 'row',
      paddingTop : 10,



    
    },
   
    logo: {
      width: 60,
      height: 60,
      borderRadius : 60 ,
    },
    Heading: {
      fontFamily: 'sans-serif', 
      fontSize : 18,
    },
   
    scrollView: {
      
    },
    
    //Button 
    ButtonHeading: {
      fontFamily: 'sans-serif-condensed', 
      fontSize : 20,
      fontStyle : 'italic',
    },
    ChatButton: {
      flexDirection: 'column',

    },
    icon1:{
      width: 50,
      height: 50,
    },
    icon2:{
      width: 30,
      height: 30,
    },
    backicon:{
      width: 20,
      height: 20,
      paddingLeft : 40,
    },
    dotsicon:{
      width: 10,
      height: 40,
      paddingRight : 40,
  
    },
    dashboardHeadings : {
      marginBottom: 5,
      marginTop: 5,
      width: 120,
      height: 35,
     
    },
    dashboardHeadingsTop : {
      marginBottom: 5,
      marginTop: 5,
      width: 190,
      height: 35,
      marginLeft: 5,
      
     
    },
    readmore:{
      marginBottom: 5,
      marginTop: 5,
      width: 120,
      height: 35,
     
      alignSelf : 'center',
    },
    viewrecipe:{
      marginBottom: 5,
      marginTop: 5,
      width: 120,
      height: 35,
    },
    ChatLogo: {
      
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#DEB6AB',

    },
    container : {
      flex: 1,
      backgroundColor: 'white',
    
    },
    containerRecipe : {
      flex: 1,
      backgroundColor: 'white',
    
    },

    //Footer
    footer: {
      paddingLeft : 8,
      paddingRight : 8,
      paddingBottom : 5,
      paddingTop :5,
      width: '100%',
      flexDirection: 'row' ,
      justifyContent : 'space-between',
      backgroundColor: '#AC7D88',
      height : 50,
      position: 'absolute',
       left: 0, 
       right: 0,
        bottom: 0
      
  },
  footerIcons: {
    width: 35,
    height : 35, 
    
},
    //Cards
    cardContainer: {
      width : 170,
      height : 220,
      alignItems : 'center',
      paddingTop : 5,
      paddingLeft: 5,
      paddingRight : 5,
      paddingBottom : 5,
     

      backgroundColor : '#FFDAC7',
      borderRadius : 10,
      marginRight : 5 ,
      justifyContent : 'space-between',
     
    },
    imgContainer : {
      height : 130,
      width : 150,
      backgroundColor : 'pink',
    },
    blogheading : {
      padding : 10,
      width: '100%',
      alignItems: 'center',


    },
    cardImg : {
      width : 150,
      height : 130,
    },
   
    cardList : {
      paddingTop : 5,
      paddingBottom : 5, 
      backgroundColor : '#F8ECD1',
    
      
      justifyContent : 'space-between'
    },
   
   
    containerStyle : {
      borderTopColor : '#AC7D88',
      marginBottom: 2,
      borderRadius : 30,
    },
    containerSplash : {
      flex : 1 ,
      justifyContent : 'center',

    },
    AppbarTitle : {
      fontFamily: 'sans-serif', 
        fontSize : 20,
        fontWeight :'bold', 
        paddingHorizontal : 20,
        color : '#FAEAEB'
    },
      headerWrapper: {
        
       flexDirection : 'row-reverse',
  
       
      },
      coverImageStyle : {
        height : 200,
        width : '100%',
        alignSelf : 'center',
        marginBottom : 10,
      },
      titleImageStyle : {
        height : 50,
        width : '100%',
        alignSelf : 'center',
        marginBottom : 10,
      },
      blogImageStyle : {
        height : 130,
        width : 200,
        alignSelf : 'center',
      },
     
      TitleWrapper : {
        marginTop: 30,
      },
      CategoryWrapper : {
        marginTop: 20,
      },
      CategoryTitle: {
        fontFamily: 'sans-serif', 
        fontSize : 20,
        fontWeight :'bold', 
        paddingHorizontal : 20,
        
      },
      ContentRecipePage: {
        fontFamily: 'sans-serif', 
        fontSize : 15,
       
        paddingHorizontal : 20,
  
        
      },
      categoryItemTitle : {
        fontFamily: 'sans-serif', 
        fontSize : 15,
        paddingTop : 10,
        alignSelf : 'center',
        fontWeight :'bold', 
  
          
      },
     disclaimertext: {
        fontFamily: 'sans-serif', 
        fontSize : 15,
        paddingTop : 10,
        alignSelf : 'center',
        fontWeight :'bold', 
        fontStyle: 'italic',
  
          
      },
      headingRecipePage: {
        fontFamily: 'sans-serif', 
        fontSize : 16,
        fontWeight :'bold', 
        paddingHorizontal : 20,
         
        
      },
      header: {
        
        backgroundColor: '#9B1454',
        height : 80,
        flexDirection : 'row',
        paddingTop : 10,
  
  
  
      
      },
     
      logo: {
        width: 60,
        height: 60,
        borderRadius : 60 ,
      },
      Heading: {
        fontFamily: 'sans-serif', 
        fontSize : 18,
      },
     
      scrollView: {
        
      },
      
      //Button 
      ButtonHeading: {
        fontFamily: 'sans-serif-condensed', 
        fontSize : 20,
        fontStyle : 'italic',
      },
      ChatButton: {
        flexDirection: 'column',
  
      },
      icon1:{
        width: 50,
        height: 50,
      },
      icon2:{
        width: 30,
        height: 30,
      },
      backicon:{
        width: 20,
        height: 20,
        paddingLeft : 40,
      },
      dotsicon:{
        width: 10,
        height: 40,
        paddingRight : 40,
    
      },
      dashboardHeadings : {
        marginBottom: 5,
        marginTop: 5,
        width: 120,
        height: 35,
       
      },
      dashboardHeadingsTop : {
        marginBottom: 5,
        marginTop: 5,
        width: 190,
        height: 35,
        marginLeft: 5,
        
       
      },
      readmore:{
        marginBottom: 5,
        marginTop: 5,
        width: 120,
        height: 35,
       
        alignSelf : 'center',
      },
      viewrecipe:{
        marginBottom: 5,
        marginTop: 5,
        width: 120,
        height: 35,
      },
      ChatLogo: {
        
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#DEB6AB',
  
      },
      container : {
        flex: 1,
        backgroundColor: 'white',
      
      },
      containerRecipe : {
        flex: 1,
        backgroundColor: 'white',
      
      },
  
      //Footer
      footer: {
        paddingLeft : 8,
        paddingRight : 8,
        paddingBottom : 5,
        paddingTop :5,
        width: '100%',
        flexDirection: 'row' ,
        justifyContent : 'space-between',
        backgroundColor: '#AC7D88',
        height : 50,
        position: 'absolute',
         left: 0, 
         right: 0,
          bottom: 0
        
    },
    footerIcons: {
      width: 35,
      height : 35, 
      
  },
      //Cards
      cardContainer: {
        width : 170,
        height : 220,
        alignItems : 'center',
        paddingTop : 5,
        paddingLeft: 5,
        paddingRight : 5,
        paddingBottom : 5,
       
  
        backgroundColor : '#FFDAC7',
        borderRadius : 10,
        marginRight : 5 ,
        justifyContent : 'space-between',
       
      },
      imgContainer : {
        height : 130,
        width : 150,
        backgroundColor : 'pink',
      },
      blogheading : {
        padding : 10,
        width: '100%',
        alignItems: 'center',
  
  
      },
      cardImg : {
        width : 150,
        height : 130,
      },
     
      cardList : {
        paddingTop : 5,
        paddingBottom : 5, 
        backgroundColor : '#F8ECD1',
      
        
        justifyContent : 'space-between'
      },
     
     
      containerStyle : {
        borderTopColor : '#AC7D88',
        marginBottom: 2,
        borderRadius : 30,
      },
      containerSplash : {
        flex : 1 ,
        justifyContent : 'center',
  
      },
    
   
    
  });
  