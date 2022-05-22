import React from 'react';
import {TouchableOpacity , ScrollView,FlatList ,StyleSheet,SafeAreaView, Text,View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import savedData from '../assets/data/savedData';
import RecipeData from '../assets/data/RecipeData';
import blogData from '../assets/data/blogData';


export default Dashboard= ({ navigation }) => {
  const renderSavedItem = ({ item }) => {
    return (
      <View style = {styles.cardContainer}>
        <View style = {styles.imgContainer}>
          <Image source={item.image} style = {styles.cardImg} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {item: item,})}
              style = {styles.readmore}
            >
              <Image  style = {styles.viewrecipe} source = {require('../assets/viewrecipe.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderBlogItem = ({ item }) => {
    return (
      <View style = {styles.cardContainer}>
        <View style = {styles.imgContainer}>
          <Image source={item.image} style = {styles.cardImg} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Blog', {item: item,})}
              style = {styles.readmore}
            >
              <Image  style = {styles.readmore} source = {require('../assets/readmore.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderFavouritesItem = ({ item }) => {
    return (
      <View style = {styles.cardContainer}>
        <View style = {styles.imgContainer}>
          <Image source={item.image} style = {styles.cardImg} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View>
            <TouchableOpacity  
              onPress={() => navigation.navigate('Details', {item: item,})}
              style = {styles.readmore}
            >
              <Image  style = {styles.viewrecipe} source = {require('../assets/viewrecipe.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return(
      <ScrollView style={styles.container}>
          {/*App Bar */ }
        <SafeAreaView>
          <Appbar.Header style = {{ backgroundColor: '#9B1454'}} >
            <Appbar.Content title = ' Dashboard' color = '#ffffff'/>
            <Appbar.Action  icon = {require('../assets/signout.png')} color ='#ffffff' size ={30} onPress = {() => {navigation.navigate("SignIn")}}/>
          </Appbar.Header>
        </SafeAreaView>
      
        
        {/*Blogs List */ }
        <View style = {styles.CategoryWrapper} >
          {/*chaneg it heeeeeeeeeetreeeeeeeeeeee */ }
          <Text style = {styles.dashboardHeadings}>Blogs</Text>
        <View>
            <FlatList
              data={blogData}
              renderItem={renderBlogItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/*Saved Recipe List */ }
        <View style = {styles.CategoryWrapper} >
                  {/*add image herereeeee */ }
            <Text style = {styles.dashboardHeadings}>Top Picks For You</Text>
          <View>
            <FlatList
              data={savedData}
              renderItem={renderSavedItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/*Favorites */ }
        <View style = {styles.CategoryWrapper} >
          {/*chabge hereeeeeeeeeeeeeeeeeeeeeeeeeee*/ }
          <Text style = {styles.dashboardHeadingsTop}>Favorites</Text>
          <View>
            <FlatList
              data={RecipeData}
              renderItem={renderFavouritesItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View> 
      </ScrollView>
  );
}
{/* */}
// styling for this component
const styles = StyleSheet.create({
    CategoryWrapper : {
      marginTop: 20,
    },
    categoryItemTitle : {
      fontFamily: 'sans-serif', 
      fontSize : 15,
      paddingTop : 10,
      alignSelf : 'center',
      fontWeight :'bold', 
    },
    header: {
      backgroundColor: '#9B1454',
      height : 80,
      flexDirection : 'row',
      paddingTop : 10
    },
    dashboardHeadings : {
      marginBottom: 5,
      marginLeft : 5,
      marginTop: 5,
      width: 200,
      height: 35,
      fontSize : 20,
      fontWeight : '700' 
    },
    dashboardHeadingsTop : {
      marginBottom: 5,
      marginLeft : 5,
      marginTop: 5,
      width: 190,
      height: 35,
      marginLeft: 5,
      fontSize : 20,
      fontWeight : '700'
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
    container : {
      flex: 1,
      backgroundColor: 'white',
    
    },
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
    cardImg : {
      width : 150,
      height : 130,
    }
});


