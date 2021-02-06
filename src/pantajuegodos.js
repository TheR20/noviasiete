import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
import BotonP from './botonpeque';
import Dialogo from './dialogo';
import BotonSeleccion from './botonseleccion';
import { Text,  Button } from 'galio-framework'


const PantaJuegoDos = (props, { navigation }) => {

  return(
    <ImageBackground style={styles.backgroundImage} source={{uri: props.imagen}}>
    <View style={{flex: 1}}>
        <ScrollView>
    <View style = {styles.barraSuperior}>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={
    () => {props.navigate(props.destination)}}>
            <View style = {{height: 60, width: 60}}>
              <Image
                  style={{resizeMode: 'cover', flex:1}}
                  source={{
                      uri: 'https://img.icons8.com/dusk/240/home.png',
                  }}
              />
            </View>
            </TouchableHighlight>
            <TouchableHighlight style = {styles.itemBarraSuperior} >
                    <View style = {{height: 45, width: 30, flex:1}}>

                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.itemBarraSuperior}>
                            <View style = {{height: 100, width: 100}}>

                            </View>
    </TouchableHighlight>
    <TouchableHighlight style =
    {styles.itemBarraSuperior} onPress={() => {navigation.navigate('Gift', {});}}>
    <Dialogo pic="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b1f45d5-0dae-4b0b-8ad0-2343a01afd50/d5seutk-61b62bfc-ef1a-4712-95a9-744c756e2d03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2IxZjQ1ZDUtMGRhZS00YjBiLThhZDAtMjM0M2EwMWFmZDUwXC9kNXNldXRrLTYxYjYyYmZjLWVmMWEtNDcxMi05NWE5LTc0NGM3NTZlMmQwMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7r6IMCgWeytzv5lZXfT2KCoOPdJkxjw5kjFQufios1c" titulo="25%"></Dialogo>
    </TouchableHighlight>

    </View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop: 200, }}>


        <TouchableHighlight style = {styles.botoncontinuar} onPress={
      () => {props.onPress(props.Movera)}}>
        <BotonP pic="https://i.imgur.com/CtkfKUm.png" titulo={props.Continuar}></BotonP>
        </TouchableHighlight>

        <Text style={styles.CajaDialogo}>{props.Texto}</Text>

    </View>
    </ScrollView>
      </View>
    </ImageBackground>

  )

}

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


export default PantaJuegoDos;
