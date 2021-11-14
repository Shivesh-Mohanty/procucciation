import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {Audio} from 'expo-av';

export default class SoundButton extends React.Component{
  constructor(props){
    super(props)
    this.state={
      buttonIndexPressed:''
    }
  }
 playSound = async soundChunk => {
    console.log(soundChunk);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={this.props.buttonIndex===this.state.buttonIndexPressed? [styles.button,{backgroundColor: 'orange'}]
:[styles.button,{backgroundColor: 'yellow'}]}
        onPress={() => {
          this.setState({buttonIndexPressed:this.props.buttonIndex})
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={styles.text}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  },
});