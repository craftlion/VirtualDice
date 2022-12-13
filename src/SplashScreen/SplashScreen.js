import React, { Component } from "react";
import { View } from "react-native";
import { Audio } from "expo-av";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.playSound(require("../../assets/sound/diceShake.mp3"));
  }

  async playSound(soundFile) {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignContent: "center",
          backgroundColor: "#950000",
        }}
      ></View>
    );
  }
}
