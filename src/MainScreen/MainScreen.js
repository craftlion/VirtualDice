import { View, Text, StatusBar, TouchableWithoutFeedback, Animated } from "react-native";
import React, { Component, useState, useRef } from "react";
import Table from "../Table/Table";
import styles from "./MainScreenStyle";

export default class MainScreen extends Component {

  constructor(props) {
    super(props);

    this.durationAnim = 80;
    this.marginButton = 5;

    this.state = {
      marginBottomRemoveDiceButton: new Animated.Value(this.marginButton),
      marginBottomAddDiceButton: new Animated.Value(this.marginButton),
      marginBottomLaunchButton: new Animated.Value(this.marginButton)
    };
  }

  removeDicePressIn() {

    this.table.removeDice();

    Animated.sequence([
      Animated.timing(this.state.marginBottomRemoveDiceButton, {
        toValue: 0,
        duration: this.durationAnim,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.marginBottomRemoveDiceButton, {
        toValue: this.marginButton,
        duration: this.durationAnim,
        useNativeDriver: false,
      })
    ]).start();
  }

  addDicePressIn() {

    this.table.addDice();

    Animated.sequence([
      Animated.timing(this.state.marginBottomAddDiceButton, {
        toValue: 0,
        duration: this.durationAnim,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.marginBottomAddDiceButton, {
        toValue: this.marginButton,
        duration: this.durationAnim,
        useNativeDriver: false,
      })
    ]).start();
  }

  launchDicesPressIn() {

    this.table.launchDices();

    Animated.sequence([
      Animated.timing(this.state.marginBottomLaunchButton, {
        toValue: 0,
        duration: this.durationAnim,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.marginBottomLaunchButton, {
        toValue: this.marginButton,
        duration: this.durationAnim,
        useNativeDriver: false,
      })
    ]).start();
  }

  render() {

    return (
      <View
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#fb7600" />
        <View
          style={styles.titleZone}>
          <Text style={styles.title}>Virtual Dice</Text>
        </View>

        <Table ref={table => { this.table = table }}></Table>

        <View
          style={
            styles.buttonsDiceZone
          }>
          <TouchableWithoutFeedback
            onPressIn={this.removeDicePressIn.bind(this)}>
            <View style={styles.buttonRemoveDice}>
              <Animated.View style={[styles.buttonRemoveDiceTop, { marginBottom: this.state.marginBottomRemoveDiceButton }]}>
                <Text style={
                  styles.textButtonRemoveDice
                }>-</Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPressIn={this.addDicePressIn.bind(this)}>
            <View style={styles.buttonAddDice}
            >
              <Animated.View style={[styles.buttonAddDiceTop, { marginBottom: this.state.marginBottomAddDiceButton }]}>
                <Text style={
                  styles.textButtonAddDice
                }>+</Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback
          onPressIn={this.launchDicesPressIn.bind(this)}>
          <View style={styles.buttonLaunch
          }>
            <Animated.View style={[styles.buttonLaunchTop, { marginBottom: this.state.marginBottomLaunchButton }]}>
              <Text style={
                styles.textButtonLaunch
              }>LAUNCH</Text>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>

    );
  }
}
