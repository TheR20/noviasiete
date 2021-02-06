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
import SQLite from 'react-native-sqlite-storage';






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
let db;
let db2;
export default class App extends Component {





  constructor(props) {
    super(props);
    this.state={
      userList:[],
      userList2:[],
      loading: "loading",
      Texto: "",
      Mover1: '',
      Mover2: '',
      Mover3: '',
      Tipo: '',
      Opc1: 'aa',
      Opc2: 'aa',
      Opc3: 'aa',
      UltimoDay: 'A2'

    }

    db = SQLite.openDatabase(
      {
        name: 'Users.db', //Name of you table
        createFromLocation : "~user.db", //Name of your DB
      },
      this.success.bind(this),  //okCallback
      this.fail                // error callback
    );

    db2 = SQLite.openDatabase(
      {
        name: 'UsarData.db', //Name of you table
        createFromLocation : "~user.db", //Name of your DB
      },
            // error callback
    );
  }





    success=()=>{

var pene= "";

const { lastDay, otherParam } = this.props.route.params;
console.log(lastDay);
db.transaction(tx => {
  tx.executeSql('SELECT * FROM UsarData ', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
    let data = results.rows.length;

    let users = [];    //creating empty array to store the rows of the sql table data

    for (let i = 0; i < results.rows.length; i++) {
      users.push(results.rows.item(i));
                   //looping through each row in the table and storing it as object in the 'users' array
    }

      pene=users[0].UltimoDia;
       console.log(users[0].UltimoDia);

     //setting the state(userlist) with users array which has all the table data
  });
});




      db.transaction(tx => {
        tx.executeSql('SELECT * FROM Users where ID ='+'"'+lastDay+'"', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
          let data = results.rows.length;

          let users = [];    //creating empty array to store the rows of the sql table data

          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
                         //looping through each row in the table and storing it as object in the 'users' array
          }

           this.setState({ userList:users,Opc2:users[0].Opcion2, Texto:users[0].Texto,Tipo:users[0].Tipo,
             Mover1:users[0].Ira1, Mover2:users[0].Ira2, Mover3:users[0].Ira3,Opc1:users[0].Opcion1,
            Opc3:users[0].Ira2,
             });
              //setting the state(userlist) with users array which has all the table data
        });
      });
      // alert("ok")
    }

    fail=(error)=>{
      console.error(error) // logging out error if there is one
    }




GenerateParrafos2=(stringe)=>{
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Users where ID ='+'"'+stringe+'"',[], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
      let data = results.rows.length;

      let users = [];    //creating empty array to store the rows of the sql table data

      for (let i = 0; i < results.rows.length; i++) {
        users.push(results.rows.item(i));
                     //looping through each row in the table and storing it as object in the 'users' array
      }

       this.setState({ userList:users,Opc2:users[0].Opcion2, Texto:users[0].Texto,Tipo:users[0].Tipo,
         Mover1:users[0].Ira1, Mover2:users[0].Ira2, Mover3:users[0].Ira3,Opc1:users[0].Opcion1,
        Opc3:users[0].Opcion3,
         });
      //setting the state(userlist) with users array which has all the table data
    });
  });
  // alert("ok")
var cristo = '"'+stringe+'"';
var consulta = 'UPDATE UsarData SET UltimoDia='+ cristo +' WHERE ID=1';
        db2.transaction(tx => {
          tx.executeSql(consulta, [], (tx, results) => {

              // sql query to get all table data and storing it in 'results' variable
                 //setting the state(userlist) with users array which has all the table data
          });
        });

     console.log(stringe);

    }




  render() {
const image = "https://media2.giphy.com/media/1UgMjrQg0mqKMgighq/giphy.gif";
const image2 = "https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg";
var a = this.state.Tipo;




if(a == 2)
{
  return (

  <PantaJuegoUno onPress={this.GenerateParrafos2}
    Movera={this.state.Mover1}
      Movera2={this.state.Mover2}
        Movera3={this.state.Mover3}
              navigate={this.props.navigation.navigate}
              destination="Home" opcion1={this.state.Opc1}
              imagen = {image}
             opcion2={this.state.Opc2}
             opcion3={this.state.Opc3}
             Texto={this.state.Texto}>
  </PantaJuegoUno>
    );
}
if(a == 1)
{
  return (
<PantaJuegoDos
onPress={this.GenerateParrafos2}
  Movera={this.state.Mover1}
            navigate={this.props.navigation.navigate}
            destination="Home"
            imagen = {image}
            Continuar={strings.Continuar}
           Texto={this.state.Texto}>
</PantaJuegoDos>
    );
}
if(a == 0)
{
  return (


    <PantaJuegoTres
    onPress={this.GenerateParrafos2}
    Movera={this.state.Mover1}
                navigate={this.props.navigation.navigate}
                destination="Home"
                imagen = {image2}
                Continuar={strings.Continuar}
               Texto="Bienvenido mi nombre es Aiko, porfavor depositame 10mil pesos y te amare toda la vida!!"
              Dia = {this.state.Texto}

    >
    </PantaJuegoTres>




    );
}


  }  }
