import React, { useState, useEffect, useRef } from 'react';
import { AppState,Button, View, Text,ImageBackground,StyleSheet,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boton from './src/botones';
import Juego from './src/juego';
import LocalizedStrings from 'react-native-localization';
import BaseDatos from './src/basedatos';
import SQLite from 'react-native-sqlite-storage';
var Sound = require('react-native-sound');
var sound = new Sound('hola2', Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
// Poner el valor -1 hace que el loop sea infinito
sound.setNumberOfLoops(-1);
 sound.play();
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

reinicioAmor=()=>{
  console.log("Reinicio amor")
}

function HomeScreen({ navigation }) {
const image = "https://media1.giphy.com/media/eH0KrUdhOmohWwfMWU/giphy.gif";
var imagenbocina = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/600px-Speaker_Icon.svg.png"
  const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
      const [imagenActi, setimagenActi] = React.useState('activo');
        const [imagenActiUrl, setimagenActiUrl] = React.useState('https://i.imgur.com/DUTvX0j.png');
          const [UltimodiaActivo, setUltimodiaActivo] = React.useState('A3');
const [amorTotal, setamorTotal] = React.useState('0');
useEffect(() => {
     AppState.addEventListener("change", _handleAppStateChange);

     return () => {
       AppState.removeEventListener("change", _handleAppStateChange);
     };
   }, []);

   const _handleAppStateChange = (nextAppState) => {

       appState.current = nextAppState;
       setAppStateVisible(appState.current);
       console.log("AppState", appState.current);

       if(appState.current == "background")
          sound.stop();
          if(appState.current == "active")

         sound.play();
     };


    const pararSonido =(estado)=>{
      if(imagenActi == "activo"){
        setimagenActi("desactivado");
        setimagenActiUrl("https://i.imgur.com/6a8gzfo.png");
          sound.stop();
      }
      else{
         setimagenActi("activo");
         setimagenActiUrl("https://i.imgur.com/DUTvX0j.png");
            sound.play();
      }

//console.log(imagenActiUrl);

       }

let db;
         db = SQLite.openDatabase(
           {
             name: 'UsarData.db', //Name of you table
             createFromLocation : "~user.db", //Name of your DB
           },
        // error callback
         );
success=()=>{
  console.log("Conexion a la base de datos exitosa");
           db.transaction(tx => {
             tx.executeSql('SELECT * FROM UsarData ', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
               let data = results.rows.length;
               let users = [];    //creating empty array to store the rows of the sql table data
               for (let i = 0; i < results.rows.length; i++) {
                 users.push(results.rows.item(i));              //looping through each row in the table and storing it as object in the 'users' array
               }

                 setUltimodiaActivo(users[0].UltimoDia);
                 setamorTotal(users[0].AmorTotal);
                  console.log(users[0].UltimoDia +"El amor es "+amorTotal);

                //setting the state(userlist) with users array which has all the table data
             });
           });
           // alert("ok")
         }




React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      success();
      console.log('Refreshed');
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',bottom: -200, }}>

      <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('Juego', {lastDay:UltimodiaActivo, totalLove:amorTotal});}}>
      <Boton pic="https://i.imgur.com/CtkfKUm.png" titulo={strings.Continuar}></Boton>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
  {navigation.navigate('Juego', {lastDay:"A0", totalLove:amorTotal});}}>
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
        <Stack.Screen name="BaseDatos" component={BaseDatos}  options={{headerShown: false}}/>
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
