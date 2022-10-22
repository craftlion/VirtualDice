import React, { Component } from "react";
import { View } from "react-native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignContent: "center",
        backgroundColor: "#950000"
      }}>

      </View>
    );
  }
}