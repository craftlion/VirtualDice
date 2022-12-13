import { View } from "react-native";
import React, { PureComponent, useRef } from "react";
import Scores from "../Scores/Scores";
import Dice from "../Dice/Dice";
import styles from "./TableStyle";
import Model from "../Model";

export default class Table extends PureComponent {
  maxDicesNumber = 9;
  maxDicesNumberPerLines = 3;

  dices = [new Dice(), new Dice(), new Dice(), new Dice(),
    new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];

  savedScores = [];

  launchingInProgress = false;

  constructor(props) {
    super(props);

    this.state = {
      nbDice : Model.nbDice
    }
  }
  saveNumberOfDice() {
    Model.saveNbDice(this.state.nbDice);
  }

  removeDice() {
    if (this.state.nbDice > 1) {
      this.setState({
        nbDice: this.state.nbDice - 1
      });

      this.saveNumberOfDice();
    }
  }

  addDice() {
    if (this.state.nbDice < this.maxDicesNumber) {
      this.setState({
        nbDice: this.state.nbDice + 1
      });

      this.dices[this.state.nbDice].resetDefaultValue()

      this.saveNumberOfDice();
    }
  }

  async launchDices() {
    if (!this.launchingInProgress) {

      this.launchingInProgress = true

      if (Model.animModeActive) {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        for (var animLoop = 0; animLoop < 5; animLoop++) {
          for (let i = 0; i < this.state.nbDice; i++) 
          {
            this.dices[i].randomValue()
          }

          this.forceUpdate();

          await sleep(120);
        }
      }

      for (let i = 0; i < this.state.nbDice; i++) 
      {
        this.dices[i].randomValue()
      }

      const currentScore = this.dices.reduce(function (acc, val) {
        return acc + val.getValue();
      }, 0);

      if (this.savedScores.length == 5) {
        this.savedScores.shift();
      }
      this.savedScores.push(currentScore);

      this.forceUpdate();

      this.launchingInProgress = false
    }
  }

  renderLineOfDice(indexLine, nbDice) {
    const listOfDice = new Array(nbDice);

    const percentBasis = 100 / nbDice + "%";

    for (let i = 0; i < nbDice; i++) {

      const dice = (
        <View style={{ flexBasis: percentBasis, marginHorizontal: 4 }}>
          {this.dices[i + indexLine * 3].render()}
        </View>
      );

      listOfDice[i] = dice;
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {listOfDice.map((dice) => {
          return dice;
        })}
      </View>
    );
  }

  render() {
    let nbLines = Math.trunc(this.state.nbDice / this.maxDicesNumberPerLines);

    let nbDicesLastLine = this.state.nbDice - this.maxDicesNumberPerLines * nbLines;

    if (nbDicesLastLine > 0) {
      nbLines = nbLines + 1;
    } else {
      nbDicesLastLine = this.maxDicesNumberPerLines;
    }

    const listOfLine = [nbLines];

    for (let i = 0; i < nbLines; i++) {
      let nbDicesOfTheLine = this.maxDicesNumberPerLines;

      if (i + 1 == nbLines) {
        nbDicesOfTheLine = nbDicesLastLine;
      }

      listOfLine[i] = this.renderLineOfDice(i, nbDicesOfTheLine);
    }

    return (
      <View style={styles.table}>
        <View style={styles.diceZone}>
          {listOfLine.map((line, index) => {
            return line;
          })}
        </View>

        <Scores savedScores={this.savedScores}></Scores>
      </View>
    );
  }
}
