//necessary imports
import React, {Component, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import SpeechAndroid from 'react-native-android-voice';
import uuid from "uuid";
import Tts from 'react-native-tts';
import { Actions, GiftedChat, Bubble, Send, InputToolbar, Composer } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
//details of key for dialogflow integration
import { dialogflowConfig } from '../env';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

 
// text variable to access dialogflow response outside of Chat component
var text;
// word variable to perform certain checks on dialogflow reponse
const word = 'Loading';
// definng recipebot
const BOT_USER = {
  _id: 2,
  name: 'RecipeBot',
  avatar: require('../assets/chatlogo.png')
}
// counting the number of times dialogflow response was spoken
var speak=0;

const Card = (props)=>{
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
          />
      </View>
    </View>
  );
}
const CardView = (props) =>{
  /*useEffect(()=>{
    this.getRecipe();
  });
  const getRecipe = ()=>{
    axios.get('/recipe')
    .then((response)=>{
      const data = response.data;
      this.setState({recipes : data});
      console.log("Data has been received");
    })
    .catch(()=>{
      return 1;
    });
  }*/
    return(
      <ScrollView horizontal={true} contentContainerStyle = {styles.cardList}>
        <Card imagePath = {props.imagePath1} recipeName = {props.recipeName1} />
        <Card imagePath = {props.imagePath2} recipeName = {props.recipeName2} />
        <Card imagePath = {props.imagePath3} recipeName = {props.recipeName3} />
      </ScrollView>
    );
}
class Chat extends Component{
  state = {
    messages : [
      {
        _id: 1,
        text: `Hi! I am Recipebot, your personal cooking assistant.`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ],
    dialogFlowResponse : ''
  };
  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
    const { status, expires, permissions } = Permissions.askAsync(
      Permissions.AUDIO_RECORDING);
  }
  handleGoogleResponse(result){
    text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }
  sendBotResponse(text){
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
    if (speak) {
      speak=0; 
      Tts.getInitStatus().then(() => {
        Tts.speak(text);
      }, (err) => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      });
    }
  }
  uuidGen(){
    return uuid.v4();
  }
  async micHandler(){
    try{
      let textSpeech = await SpeechAndroid.startSpeech("Speak now", SpeechAndroid.ENGLISH);
      console.log(textSpeech);
      console.log("heloo");
      speak=1;
      let StateVariable = [{
        "text": textSpeech,
        "user": {
          "_id": 1
        },
        "createdAt": new Date(),
        "_id": this.uuidGen()
      }];
      this.onSend(StateVariable);
      ToastAndroid.show(textSpeech, ToastAndroid.LONG);
      return(Promise.resolve(1));
    }
    catch (error){
      switch (error) {
        case SpeechAndroid.E_VOICE_CANCELLED:
          
          ToastAndroid.show("Voice Recognizer cancelled", ToastAndroid.LONG);
          break;
        case SpeechAndroid.E_NO_MATCH:
          ToastAndroid.show("No match for what you said", ToastAndroid.LONG);
          break;
        case SpeechAndroid.E_SERVER_ERROR:
          ToastAndroid.show("Google Server Error", ToastAndroid.LONG);
          break;
     }
     return (Promise.reject("Cancelled"));
    }
  }
  onSend(messages = []){
    this.setState((previousState) => ({ 
      messages : GiftedChat.append(previousState.messages, messages)
    }));
    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }
  renderBubble =(props) => {
    return (
      <Bubble
        {...props}
        timeTextStyle={{
          right: {
            color: '#000000',
          },
        }}
        textStyle={{
          right: {
            color: '#000000',
          },
        }}
        wrapperStyle={{
          left: {
            alignSelf: 'stretch',
            backgroundColor: '#F8ECD1',
          },
          right: {
            backgroundColor: '#DEB6AB',
          },
        }}
      />
    );
  }
  renderSend = (props) => {
    if (props.text.trim().length > 0) {
      return (
        <Send
            {...props}
            containerStyle = {styles.sendcontainerStyle}
          >
            <Image
              source={require('../assets/send.png')}
              style={styles.sendLogoStyle}
            />
          </Send>
      );
    }
  }
  renderInputToolbar(props){
    return (
      <InputToolbar
       {...props}
       containerStyle= {styles.containerStyle}/>
       
    )       
  }
  renderCustomView(props){
    const {currentMessage} = props;
    console.log(currentMessage);
    // specific recipe
    if (currentMessage.text.indexOf(word) !== -1 && (currentMessage.text.toLowerCase().indexOf("pasta") !== -1)){
      return(
        <Card imagePath = {require('../assets/pasta.jpg')} recipeName = "Pasta" />
      )
    }
    // cuisine based search
    else if (currentMessage.text.indexOf(word) !== -1 && (currentMessage.text.toLowerCase().indexOf("pakistani") !== -1)){
      return(
        <CardView imagePath1 = {require('../assets/samosa.jpeg')} recipeName1 = "Chicken Samosa" 
        imagePath2 = {require('../assets/keema.png')} recipeName2 = "Qeema"
        imagePath3 = {require('../assets/halwa.jpeg')} recipeName3 = "Halwa" />
      )
    }
    // mealtime based search
    else if (currentMessage.text.indexOf(word) !== -1 && (currentMessage.text.toLowerCase().indexOf("dinner") !== -1)){
      return(
        <CardView imagePath1 = {require('../assets/keema.png')} recipeName1 = "Qeema" 
        imagePath2 = {require('../assets/pizza.png')} recipeName2 = "Pizza"
        imagePath3 = {require('../assets/biryani.png')} recipeName3 = "Biryani" />
      )
    }
    // foodtype based search
    else if (currentMessage.text.indexOf(word) !== -1 && (currentMessage.text.toLowerCase().indexOf("chicken") !== -1)){
      return(
        <CardView imagePath1 = {require('../assets/biryani.png')} recipeName1 = "Chicken Biryani" 
        imagePath2 = {require('../assets/pasta.jpg')} recipeName2 = "Pizza"
        imagePath3 = {require('../assets/pizza.png')} recipeName3 = "Pizza" />
      )
    }


  }
  renderActions(props) {
    return (
      <Actions
        {...props}
        containerStyle={{
          width: 25,
        }}
        icon={() => (
          <Image
                source={require('../assets/MicIcon.png')}
                style={styles.micIconStyle}
              />
        )}
      />
    );
  }
  render(){
    //console.log(text);
    return (
      // flex : 1 the size of all of the other elements will have the same width as their content
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <GiftedChat messages={this.state.messages}
          placeholder = "Type your message here..."
          renderBubble = {this.renderBubble}
          renderSend = {this.renderSend}
          renderInputToolbar = {this.renderInputToolbar}
          renderCustomView = {this.renderCustomView}
          isCustomViewBottom = {true}
          onPressActionButton = {this.micHandler}
          renderActions = {this.renderActions}
          onSend = {messages => this.onSend(messages)}
          user = {{_id : 1}}
          {
            ...
            Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
          }
        />
      </View>
    );
  }
};
export default Chat;
// styling for this component
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
  cardList : {
    paddingTop : 5,
    paddingBottom : 5, 
    backgroundColor : '#F8ECD1',
  
    
    justifyContent : 'space-between'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    position: 'absolute',
    left : 16,
  },
  header: {
    backgroundColor: '#AC7D88',
    marginTop : 25,
    paddingTop: 50,
    padding: 5,
    height : 60,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
  
  },
  logo: {
    width: 66,
    height: 58,
  },
  sendcontainerStyle : {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  sendLogoStyle :{
      width: 40,
      height: 40,
  }, 
  containerStyle : {
    borderTopColor : '#AC7D88',
    marginBottom: 2,
    borderRadius : 30,
    borderWidth : 0.5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
  micIconStyle : {
    width: 25,
    height: 25,
  } 
});