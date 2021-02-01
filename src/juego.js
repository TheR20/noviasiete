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
import PantaJuegoUno from './pantajuegouno';
import PantaJuegoDos from './pantajuegodos';
import PantaJuegoTres from './pantajuegotres';

import BotonSeleccion from './botonseleccion';
import LocalizedStrings from 'react-native-localization';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Usa la localisacion para saber el idio del telefono
let strings = new LocalizedStrings({
  en:{
    dia:"DAY 2",
    Continuar: "CONTINUE",
  },
  es:{
    dia:"DIA 2",
Continuar: "CONTINUAR",
  },

});
var numero = 0;

export default class App extends Component {

  state = {
        loading: "loading"
      }


//Genera un numero random y cambia el texto dependiendo si es en ingles o espa;ol

GenerateParrafos2=(stringe)=>{
console.log(stringe);
    }


  render() {
const image = "https://media2.giphy.com/media/1UgMjrQg0mqKMgighq/giphy.gif";
const image2 = "https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg";
var a = 0;
if(a == 0)
{
  return (
  <PantaJuegoUno onPress={this.GenerateParrafos2}
              navigate={this.props.navigation.navigate}
              destination="Home" opcion1="Depositar los 10mil pesos"
              imagen = {image}
             opcion2="Fingir un derrame cerebral"
             opcion3="Pedir un prestamo"
             Texto="Bienvenido mi nombre es Aiko, porfavor depositame 10mil pesos y te amare toda la vida!!" >
  </PantaJuegoUno>
    );
}
if(a == 1)
{
  return (
<PantaJuegoDos
onPress={this.GenerateParrafos2}
            navigate={this.props.navigation.navigate}
            destination="Home"
            imagen = {image}
            Continuar={strings.Continuar}
           Texto="Bienvenido mi nombre es Aiko, porfavor depositame 10mil pesos y te amare toda la vida!!" >
>
</PantaJuegoDos>
    );
}
if(a == 2)
{
  return (
    <PantaJuegoTres
    onPress={this.GenerateParrafos2}
                navigate={this.props.navigation.navigate}
                destination="Home"
                imagen = {image2}
                Continuar={strings.Continuar}
               Texto="Bienvenido mi nombre es Aiko, porfavor depositame 10mil pesos y te amare toda la vida!!"
              Dia = {strings.dia}

    >
    </PantaJuegoTres>
    );
}


  }  }
