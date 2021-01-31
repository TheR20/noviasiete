/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React,  { Component }  from 'react';
import { Text,  Button } from 'galio-framework'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  AppState,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BotonP from './botonpeque';
import Dialogo from './dialogo';
import BotonSeleccion from './botonseleccion';
import LocalizedStrings from 'react-native-localization';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


var Sound = require('react-native-sound');
var sound4 = new Sound('risa', Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
// Poner el valor -1 hace que el loop sea infinito
 //sound3.play();
});
//Usa la localisacion para saber el idio del telefono
let strings = new LocalizedStrings({
  en:{
    dia:"DAY",
    Continuar: "CONTINUE",
  },
  es:{
    dia:"DIA",
Continuar: "CONTINUAR",
  },

});
var numero = 0;

export default class App extends Component {

  state = {
        loading: "loading"
      }

      componentDidMount(){

          AppState.addEventListener('change', this._handleAppStateChange)
        }

        componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange(currentAppState) {
    if(currentAppState == "background") {
        sound.stop();
        console.log(currentAppState);
    }
    if(currentAppState == "active") {
        sound.play();
    }
  }


//Genera un numero random y cambia el texto dependiendo si es en ingles o espa;ol

GenerateParrafos2=()=>{
console.log("kk");
    }


  render() {
const image = "https://media2.giphy.com/media/1UgMjrQg0mqKMgighq/giphy.gif";
const image2 = "https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg";
var a = 2;
if(a == 0)
{
  return (
  <ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
  <View style = {styles.barraSuperior}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={
  () => this.props.navigation.navigate('Home')}>
          <View style = {{height: 60, width: 60}}>
            <Image
                style={{resizeMode: 'cover', flex:1}}
                source={{
                    uri: 'https://img.icons8.com/dusk/240/home.png',
                }}
            />
          </View>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
                  <View style = {{height: 45, width: 30, flex:1}}>

                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
                          <View style = {{height: 100, width: 100}}>

                          </View>
                          </TouchableHighlight>
                          <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>

                                  <Dialogo pic="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b1f45d5-0dae-4b0b-8ad0-2343a01afd50/d5seutk-61b62bfc-ef1a-4712-95a9-744c756e2d03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2IxZjQ1ZDUtMGRhZS00YjBiLThhZDAtMjM0M2EwMWFmZDUwXC9kNXNldXRrLTYxYjYyYmZjLWVmMWEtNDcxMi05NWE5LTc0NGM3NTZlMmQwMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7r6IMCgWeytzv5lZXfT2KCoOPdJkxjw5kjFQufios1c" titulo="25%"></Dialogo>

                                  </TouchableHighlight>

  </View>

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , bottom: -100}}>


        <TouchableHighlight style = {styles.botonseleccion} onPress={
        () => this.GenerateParrafos2()}>
        <BotonSeleccion pic="https://i.imgur.com/TvggTwY.png" titulo="Depositar los 10mil pesos"></BotonSeleccion>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.botonseleccion} onPress={
        () => this.GenerateParrafos2()}>
        <BotonSeleccion pic="https://i.imgur.com/TvggTwY.png" titulo="Fingir un derrame cerebral"></BotonSeleccion>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.botonseleccion} onPress={
        () => this.GenerateParrafos2()}>
        <BotonSeleccion pic="https://i.imgur.com/TvggTwY.png" titulo="Llamarle a mama para pedir un prestamo"></BotonSeleccion>
        </TouchableHighlight>



  </View>


  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',bottom: -5, }}>

      <Text style={styles.CajaDialogo}>Bienvenido mi nombre es Aiko, porfavor depositame 10mil pesos y te amare toda la vida!!</Text>

  </View>
  </ImageBackground>
    );
}
if(a == 1)
{
  return (
  <ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
  <View style = {styles.barraSuperior}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={
  () => this.props.navigation.navigate('Home')}>
          <View style = {{height: 60, width: 60}}>
            <Image
                style={{resizeMode: 'cover', flex:1}}
                source={{
                    uri: 'https://img.icons8.com/dusk/240/home.png',
                }}
            />
          </View>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
                  <View style = {{height: 45, width: 30, flex:1}}>

                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
                          <View style = {{height: 100, width: 100}}>

                          </View>
</TouchableHighlight>
<TouchableHighlight style =
{styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
<Dialogo pic="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b1f45d5-0dae-4b0b-8ad0-2343a01afd50/d5seutk-61b62bfc-ef1a-4712-95a9-744c756e2d03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2IxZjQ1ZDUtMGRhZS00YjBiLThhZDAtMjM0M2EwMWFmZDUwXC9kNXNldXRrLTYxYjYyYmZjLWVmMWEtNDcxMi05NWE5LTc0NGM3NTZlMmQwMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7r6IMCgWeytzv5lZXfT2KCoOPdJkxjw5kjFQufios1c" titulo="25%"></Dialogo>
</TouchableHighlight>

  </View>

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',bottom: -150, }}>


      <TouchableHighlight style = {styles.botoncontinuar} onPress={
      () => this.GenerateParrafos2()}>
      <BotonP pic="https://i.imgur.com/CtkfKUm.png" titulo={strings.Continuar}></BotonP>
      </TouchableHighlight>

      <Text style={styles.CajaDialogo}>Hola, Bienvenido mi nombre es Aiko, porfavor depositame 10mil pesos y te amare toda la vida!!</Text>

  </View>
  </ImageBackground>
    );
}
if(a == 2)
{
  return (
  <ImageBackground style={styles.backgroundImage} source={{uri:  image2}}>
  <View style = {styles.barraSuperior}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={
  () => this.props.navigation.navigate('Home')}>
          <View style = {{height: 60, width: 60}}>
            <Image
                style={{resizeMode: 'cover', flex:1}}
                source={{
                    uri: 'https://img.icons8.com/dusk/240/home.png',
                }}
            />
          </View>
          </TouchableHighlight>
          <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
                  <View style = {{height: 45, width: 30, flex:1}}>

                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
                          <View style = {{height: 100, width: 100}}>

                          </View>
</TouchableHighlight>
<TouchableHighlight style =
{styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
<Dialogo pic="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b1f45d5-0dae-4b0b-8ad0-2343a01afd50/d5seutk-61b62bfc-ef1a-4712-95a9-744c756e2d03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2IxZjQ1ZDUtMGRhZS00YjBiLThhZDAtMjM0M2EwMWFmZDUwXC9kNXNldXRrLTYxYjYyYmZjLWVmMWEtNDcxMi05NWE5LTc0NGM3NTZlMmQwMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7r6IMCgWeytzv5lZXfT2KCoOPdJkxjw5kjFQufios1c" titulo="25%"></Dialogo>
</TouchableHighlight>

  </View>

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',bottom: 5, }}>

  <Text style={styles.CajaDialogoDias}>{strings.dia} 2</Text>
  <Text style={styles.CajaDialogoDias}>12:00:00AM </Text>

      <TouchableHighlight style = {styles.botoncontinuarTextDias} onPress={
      () => this.GenerateParrafos2()}>
      <BotonP pic="https://i.imgur.com/TvggTwY.png" titulo={strings.Continuar}></BotonP>
      </TouchableHighlight>

  </View>
  </ImageBackground>
    );
}


  }  }


const styles = StyleSheet.create({

  backgroundImage: {

    flex: 1,
    resizeMode: 'cover',
  },

  CajaDialogo: {
    borderColor:'rgba(58, 134, 166, 1)',
    borderWidth:10,
    textShadowColor: 'blue',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 30,
        textAlign: 'center', // <-- the magic
          fontSize: 21,
          color: "white",
          backgroundColor: 'rgba(54, 164, 211, .9)',
            fontFamily: 'monospace',
            marginLeft:2,
            marginRight:2,
borderRadius:14,
      },
CajaDialogoDias: {

  textShadowColor: 'yellow',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
      textAlign: 'center', // <-- the magic
        fontSize: 45,
        color: "white",

          fontFamily: 'monospace',
          marginLeft:2,
          marginRight:2,
borderRadius:14,
    },
    CajaDialogoContinuar: {
          textAlign: 'center', // <-- the magic
            fontSize: 18,
            color: "white",
            fontFamily: 'monospace',
              marginLeft:2,
              marginRight:2,
                borderRadius:14,
        },
      botonseleccion:{
justifyContent:'center',
         alignItems:'center',
         height:70,
         width:60,
         marginLeft:5,
         marginRight:5,

       },
      botoncontinuar:{
justifyContent:'center',
         alignItems:'center',
         height:70,
         width:50,
         marginLeft:205,
         marginRight:5,

       },
       botoncontinuarText:{
 justifyContent:'center',
          alignItems:'center',
          height:70,
          width:120,
          marginLeft:205,
          marginRight:5,
            top: 125
        },
        botoncontinuarTextDias:{
  justifyContent:'center',
           alignItems:'center',
           height:70,
           width:120,
           marginLeft:205,
           marginRight:5,
             top: 180
         },
       itemBarraSuperior:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

    marginLeft:5,
    marginRight:5,

  },
       barraSuperior:{

    flexDirection: 'row',
    marginTop:1,
  },

});
