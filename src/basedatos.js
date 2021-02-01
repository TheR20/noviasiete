import * as React from 'react';
import SQLite from 'react-native-sqlite-storage';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput
} from 'react-native';
import { Component } from 'react';



let db;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userList:[],
      userList2:[],
    }
    db = SQLite.openDatabase(
      {
        name: 'Users.db', //Name of you table
        createFromLocation : "~user.db", //Name of your DB
      },
      this.success.bind(this),  //okCallback
      this.fail                // error callback
    );
    }

    success=()=>{
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM Users', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
          let data = results.rows.length;

          let users = [];    //creating empty array to store the rows of the sql table data

          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
                         //looping through each row in the table and storing it as object in the 'users' array
          }

           this.setState({ userList:users});         //setting the state(userlist) with users array which has all the table data
        });
      });
      // alert("ok")
    }

    fail=(error)=>{
      console.error(error) // logging out error if there is one
    }

    db = SQLite.openDatabase(
      {
        name: 'UsersEn.db', //Name of you table
        createFromLocation : "~user.db", //Name of your DB
      },
      this.success.bind(this),  //okCallback
      this.fail                // error callback
    );


    success=()=>{
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM UsersEn', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
          let data = results.rows.length;

          let users = [];    //creating empty array to store the rows of the sql table data

          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
                         //looping through each row in the table and storing it as object in the 'users' array
          }

           this.setState({ userList2:users});         //setting the state(userlist) with users array which has all the table data
        });
      });
      // alert("ok")
    }

    fail=(error)=>{
      console.error(error) // logging out error if there is one
    }



  render() {



    return (

         <View style={{flex:1}}>
         <ScrollView>
         {
            this.state.userList2.map(function(item2, i){
              
              return(
                <View key={i} style={styles.card}>

                  <Text >{item2.Text}</Text>


                </View>
              )
            })
          }

         {
            this.state.userList.map(function(item, i){

              return(
                <View key={i} style={styles.card}>
                 <Text >{item.ID}</Text>
                  <Text >{item.Texto}</Text>


                </View>
              )
            })
          }

          </ScrollView>

      </View>

    );
  }
}

const styles = StyleSheet.create ({

 card:{
   backgroundColor:"#eee",
   marginBottom:12,
   marginHorizontal:26,
   // width:340,
   height:80,
   borderRadius:6,
   justifyContent:"center",
   shadowColor: '#000',
   shadowOffset: { width: 1, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 2,
 },

})
