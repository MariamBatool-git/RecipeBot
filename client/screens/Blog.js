import React from 'react';
import {ScrollView, Text,View, Image } from 'react-native';
import styles from './styles/styles';

const Blog = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <ScrollView style={styles.containerRecipe}>
            <Image source={item.coverImage} style = {styles.coverImageStyle} />     
            <Image source={item.TitleImage} style = {styles.titleImageStyle} />
            <View style = {styles.blogheading}>
                <Image source= {require('../assets/blogheading.png')} style = {styles.readmore} />
            </View>
            <Text style={styles.ContentRecipePage}>{item.details}</Text>
            <Image source={item.blogImage} style = {styles.blogImageStyle} />
            <Text style={styles.ContentRecipePage}>{item.details2}</Text>
            <Text style={styles.disclaimertext}>{item.disclaimer}</Text>
        </ScrollView>
    );
};
export default Blog ;
