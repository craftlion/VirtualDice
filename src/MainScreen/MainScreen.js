import { View, Text, StatusBar, TouchableWithoutFeedback, Animated } from "react-native";
import React, { Component, useState } from "react";
import Table from "../Table/Table";
import styles from "./MainScreenStyle";

export default class MainScreen extends Component {

  removeDice() {
    this.table.removeDice();
  }

  addDice() {
    this.table.addDice();
  }

  launchDices() {

    this.table.launchDices();
  }

  render() {

    return (
      <View
        style={styles.container}
      >
        <StatusBar barStyle="white-content" backgroundColor="#27476E" />
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
            onPress={this.removeDice.bind(this)}>
            <View style={styles.buttonRemoveDice}>
              <Animated.View style={styles.buttonRemoveDiceTop}>
                <Text style={
                  styles.textButtonRemoveDice
                }>-</Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.addDice.bind(this)}>
            <View style={styles.buttonAddDice}
            >
              <Animated.View style={styles.buttonAddDiceTop}>
                <Text style={
                  styles.textButtonAddDice
                }>+</Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback
          onPress={this.launchDices.bind(this)}>
          <View style={
            styles.buttonLaunch
          }>
            <Animated.View style={styles.buttonLaunchTop}>

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
