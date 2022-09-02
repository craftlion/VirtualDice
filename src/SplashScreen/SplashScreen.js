import React, { Component } from "react";
import {Text, View } from "react-native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, alignContent:"center"}}>
        <Text>Hello Splash</Text>
      </View>
    );
  }
}