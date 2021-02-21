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
    idioma:"en",
    dia:"DAY 2",
    Continuar: "CONTINUE",
  },
  es:{
    idioma:"es",
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
      UltimoDay: 'A2',
      Textoen: '',
      Opc1en: 'aa',
      Opc2en: 'aa',
      Opc3en: 'aa',
      AmorTotal:'',
      Love1:'',
      Love2:'',
      Love3:'',
      Url: '',
      Fotos:[
      //Fondo
      "https://i.redd.it/icqbjl5g43f61.jpg",
      //1 Salon
      "https://media2.giphy.com/media/1UgMjrQg0mqKMgighq/giphy.gif",
 //2 cocina
    "https://media0.giphy.com/media/3EjU8IzlPRx8LnjgCq/giphy.gif",
//3 Pensamiento
      "https://www.itl.cat/pngfile/big/226-2263788_anime-scenery-phone-anime-background.jpg",
//4 Pasillo
      "https://media1.giphy.com/media/nP00OBaVKrZMlZfcXe/giphy.gif",
      //5 Techo
      "https://media1.giphy.com/media/zgYMcTH6a1wOPWeqQv/giphy.gif",
      //6 Puente
      "https://media1.giphy.com/media/tZC82PvIaFrnNK2MY1/giphy.gif",
      //7 celular
      "https://ojosdepapelweb.files.wordpress.com/2016/11/5026.gif?w=678&h=366",
      ],
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
const { totalLove } = this.props.route.params;
console.log(lastDay+"El amor es "+totalLove);
//where ID ='+'"'+lastDay+'"'
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM Users where ID ='+'"'+lastDay+'"' , [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
          let data = results.rows.length;

          let users = [];    //creating empty array to store the rows of the sql table data

          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
                         //looping through each row in the table and storing it as object in the 'users' array
          }

           this.setState({ userList:users,Opc2:users[0].Opcion2, Texto:users[0].Texto,Tipo:users[0].Tipo,
             Mover1:users[0].Ira1, Mover2:users[0].Ira2, Mover3:users[0].Ira3,Opc1:users[0].Opcion1,
            Opc3:users[0].Ira2,Textoen:users[0].TextoEn,Opc1en:users[0].Op1En,Opc2en:users[0].Op2En,
            Opc3en:users[0].Op3En,Url:users[0].Url,AmorTotal:totalLove,Love1:users[0].Amor1,Love2:users[0].Amor2,
            Love3:users[0].Amor3,
             });
              //setting the state(userlist) with users array which has all the table data
        });
      });
      // alert("ok")
    }

    fail=(error)=>{
      console.error(error) // logging out error if there is one
    }




GenerateParrafos2=(stringe,Amorcito)=>{
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
        Opc3:users[0].Opcion3,Textoen:users[0].TextoEn,Opc1en:users[0].Op1En,Opc2en:users[0].Op2En,
        Opc3en:users[0].Op3En,Url:users[0].Url,AmorTotal:this.state.AmorTotal+Amorcito,Love1:users[0].Amor1,Love2:users[0].Amor2,
        Love3:users[0].Amor3,
         });
      //setting the state(userlist) with users array which has all the table data
    });
  });
  // alert("ok")
var cristo = '"'+stringe+'"';
var consulta = 'UPDATE UsarData SET UltimoDia='+ cristo +',AmorTotal='+ this.state.AmorTotal+' WHERE ID=1';
        db2.transaction(tx => {
          tx.executeSql(consulta, [], (tx, results) => {

              // sql query to get all table data and storing it in 'results' variable
                 //setting the state(userlist) with users array which has all the table data
          });
        });

     console.log(stringe +"El amor es "+Amorcito);

    }




  render() {
const image = "https://media2.giphy.com/media/1UgMjrQg0mqKMgighq/giphy.gif";
const image2 = "https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg";
var a = this.state.Tipo;




if(a == 2)
{
  if(strings.idioma == "es"){
    return (
    <PantaJuegoUno onPress={this.GenerateParrafos2}
      Movera={this.state.Mover1}
        Movera2={this.state.Mover2}
          Movera3={this.state.Mover3}
                navigate={this.props.navigation.navigate}
                destination="Home" opcion1={this.state.Opc1}
                imagen = {this.state.Fotos[this.state.Url] }
               opcion2={this.state.Opc2}
               opcion3={this.state.Opc3}
               Amor={this.state.AmorTotal+"%"}
               Amor1={this.state.Love1}
               Amor2={this.state.Love2}
               Amor3={this.state.Love3}
               Texto={this.state.Texto}>
               Amor1={this.state.Love1}
    </PantaJuegoUno>
      );
  }else{
    return (
    <PantaJuegoUno onPress={this.GenerateParrafos2}
      Movera={this.state.Mover1}
        Movera2={this.state.Mover2}
          Movera3={this.state.Mover3}
                navigate={this.props.navigation.navigate}
                destination="Home" opcion1={this.state.Opc1en}
                imagen = {this.state.Fotos[this.state.Url] }
               opcion2={this.state.Opc2en}
               opcion3={this.state.Opc3en}
                  Amor={this.state.AmorTotal+"%"}
               Amor1={this.state.Love1}
               Amor2={this.state.Love2}
               Amor3={this.state.Love3}
               Texto={this.state.Textoen}>
    </PantaJuegoUno>
      );
  }
}
if(a == 1)
{
  if(strings.idioma == "es"){
    return (
  <PantaJuegoDos
  onPress={this.GenerateParrafos2}
    Movera={this.state.Mover1}
              navigate={this.props.navigation.navigate}
              destination="Home"
              imagen = {this.state.Fotos[this.state.Url] }
              Continuar={strings.Continuar}
               Amor={this.state.AmorTotal+"%"}
              Amor1={this.state.Love1}

             Texto={this.state.Texto}>

  </PantaJuegoDos>
      );
  }
  else{
    return (
  <PantaJuegoDos
  onPress={this.GenerateParrafos2}
    Movera={this.state.Mover1}
              navigate={this.props.navigation.navigate}
              destination="Home"
                  imagen = {this.state.Fotos[this.state.Url] }
              Continuar={strings.Continuar}
               Amor={this.state.AmorTotal+"%"}
              Amor1={this.state.Love1}

             Texto={this.state.Textoen}>
  </PantaJuegoDos>
      );
  }

}
if(a == 0)
{
  if(strings.idioma == "es"){
    return (
  <PantaJuegoTres
      onPress={this.GenerateParrafos2}
      Movera={this.state.Mover1}
                  navigate={this.props.navigation.navigate}
                  destination="Home"
                    imagen = {this.state.Fotos[this.state.Url] }
                  Continuar={strings.Continuar}
                   Amor={this.state.AmorTotal+"%"}
                  Amor1={this.state.Love1}

                  Dia = {this.state.Texto}

      >
      </PantaJuegoTres>
      );
  }
  else{
    return (
  <PantaJuegoTres
      onPress={this.GenerateParrafos2}
      Movera={this.state.Mover1}
                  navigate={this.props.navigation.navigate}
                  destination="Home"
                  imagen = {this.state.Fotos[this.state.Url] }
                  Continuar={strings.Continuar}
                   Amor={this.state.AmorTotal+"%"}
                  Amor1={this.state.Love1}

                  Dia = {this.state.Textoen}

      >
      </PantaJuegoTres>
      );
  }


}


  }  }
