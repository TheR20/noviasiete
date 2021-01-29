import * as React from 'react';
import { Button, View, Text,ImageBackground,StyleSheet,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boton from './src/botones';
import Juego from './src/juego';
import LocalizedStrings from 'react-native-localization';


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
    Continuar:"CONTINUE",
    Inicio: "NEW GAME",
    Creditos: "CREDITS"
  },
  es:{
    Continuar:"CONTINUAR",
    Inicio: "NUEVA PARTIDA",
    Creditos: "CREDITOS"
  },

});

function HomeScreen({ navigation }) {
const image = "https://media1.giphy.com/media/eH0KrUdhOmohWwfMWU/giphy.gif";
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',bottom: -200, }}>

      <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('Juego', {genero:'Jazz' , numArreglo:0});}}>
      <Boton pic="https://i.imgur.com/CtkfKUm.png" titulo={strings.Continuar}></Boton>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('Details', {genero:'Jazz' , numArreglo:0});}}>
  <Boton pic="https://i.imgur.com/CtkfKUm.png" titulo={strings.Inicio}></Boton>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('Details', {genero:'Jazz' , numArreglo:0});}}>
<Boton pic="https://i.imgur.com/CtkfKUm.png" titulo={strings.Creditos}></Boton>
</TouchableHighlight>
    </View>
  </ImageBackground>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        
  <Stack.Screen name="Juego" component={Juego}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create ({

 backgroundImage: {

   flex: 1,
   resizeMode: 'cover',
 },
 itemBarraSuperior:{


    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:50,
    marginLeft:5,
    marginRight:5,

  },

})

export default App;
