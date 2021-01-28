import * as React from 'react';
import { Button, View, Text,ImageBackground,StyleSheet,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boton from './src/botones';

function HomeScreen({ navigation }) {
const image = "https://media1.giphy.com/media/eH0KrUdhOmohWwfMWU/giphy.gif";
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',bottom: -200, }}>

      <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('Details', {genero:'Jazz' , numArreglo:0});}}>
      <Boton pic="https://i.imgur.com/CtkfKUm.png" titulo="CONTINUAR PARTIDA"></Boton>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('Details', {genero:'Jazz' , numArreglo:0});}}>
  <Boton pic="https://i.imgur.com/CtkfKUm.png" titulo="NUEVA PARTIDA"></Boton>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('Details', {genero:'Jazz' , numArreglo:0});}}>
<Boton pic="https://i.imgur.com/CtkfKUm.png" titulo="CREDITOS"></Boton>
</TouchableHighlight>
    </View>
  </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
const image = "https://i.pinimg.com/originals/94/c5/73/94c573eea4af66640e6e99451a7dedeb.gif";
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  image}}>

    </ImageBackground>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={DetailsScreen}  options={{headerShown: false}}/>
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
