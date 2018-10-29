import React, {Component} from 'react';
import {
Platform, 
StyleSheet, 
Text, 
View,
TouchableOpacity,
TextInput,
Image,
ImageBackground,
Dimensions
} from 'react-native';

import bgImage from './images/backgroundimage.jpg';
import Logo from './images/logo.png';

const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component{
  render() {
    return (
      <ImageBackground style={styles.background} source={bgImage}>
          <Image style={styles.logo} source={Logo}/>
          <Text style={styles.textLogo}>
            TriunviratoApp
          </Text>

          <TextInput style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255, 0.7)'}
          androidUnderLine= 'transparten'
          />

          <TextInput style={styles.input}
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255, 0.7)'}
          underLineColorAndroid= 'transparten'
          />

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  logo:{
    width: 120,
    height: 120
  },
  textLogo:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input:{
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0, 0.35)', 
    borderRadius: 25,
    paddingLeft: 45,
    marginTop: 20,
    color: 'white',
    marginHorizontal: 45
  },
  btnLogin:{
    alignContent: 'center',
    justifyContent: 'center',
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    backgroundColor: '#2980b9', 
    borderRadius: 25,
    marginTop: 35,
    marginHorizontal: 45
  },
  btnText:{
    textAlign: 'center',
    color: 'white'
  }
  
});
