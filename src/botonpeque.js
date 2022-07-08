import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

const BotonP = (props, { navigation }) => {

  return(
    <View
    style={{
      borderRadius:1,
      padding: 5,
    }}
    >
    <View
    style={{
    width: 200,
    height: 50,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius:1,
      }}
    >
    <Image
    source={{uri: props.pic}}
    style={{
    width: 200,
    height: 40,
    resizeMode: 'cover',
      }}/>
    </View>
<View   style={{
alignItems: 'center',
  }}>
    <Text
    style={{
      fontSize: 22,
          fontWeight: "bold",
          color: "white",
    textAlign: 'center',
  bottom: 16,
    textShadowColor: 'blue',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 30,
  position: 'absolute',
    }}
    > {props.titulo}</Text>
      </View>
    </View>
  )
}
export default BotonP;
