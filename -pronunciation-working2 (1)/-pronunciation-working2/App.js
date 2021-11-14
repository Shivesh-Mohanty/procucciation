import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import AppHeader from "./components/AppHeader"
import db from "./local_db"
import SoundButton from "./components/SoundButton"
import *as Speech from 'expo-speech'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      sounds: []
    };
  }
  render() {
    return (
      <View>
        < AppHeader/>
<View    style={styles.textContainer}>
<Image
style={styles.image}
 source={require('./assets/boy.png')}/>
        <TextInput
           style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
             var word = this.state.text.toLowerCase().trim()
            db[word]? (this.setState({chunks:db[word].chunks}),
            this.setState({sounds:db[word].phones})
            ):alert('the word does not exist in our database');
          }}>
          <Text style={styles.bText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <SoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.sounds[index]}
                buttonIndex={index}
              />
            );
          })}
       
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lightblue',
    height : 700
    
  },
 
  inputBox: {
    marginTop: 1,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  button: {
    width: '100%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    margin: 10
    
  },
  bText:{
    fontWeight :'bold',
    fontSize : 30
  },
  image:{
    width : 150,
    height : 200,
    marginLeft : 75,
    marginTop : 40,
    marginBottom : 40
  }

});

