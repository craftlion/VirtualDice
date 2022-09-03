import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { PureComponent } from "react";
import Scores from "../Scores/Scores";
import Dice from "../Dice/Dice";
import styles from "./TableStyle";


export default class Table extends PureComponent {

    maxDicesNumber = 9;
    maxDicesNumberPerLines = 3;

    nbDice = 1;
    dicesValue = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    savedScores = [];

    constructor(props) {
        super(props);
    }
    async saveNumberOfDice() {
        try {
            const valueToSave = this.nbDice.toString();
            await AsyncStorage.setItem('nbDice', valueToSave)
        } catch (e) {
        }
    }

    removeDice() {
        if (this.nbDice > 1) {
            this.nbDice = this.nbDice - 1;
            this.dicesValue[this.nbDice] = 0;

            this.saveNumberOfDice();

            this.forceUpdate();
        }
    }

    addDice() {
        if (this.nbDice < this.maxDicesNumber) {
            this.nbDice = this.nbDice + 1;

            this.saveNumberOfDice();

            this.forceUpdate();
        }
    }

    launchDices() {

        for (var i = 0; i < this.nbDice; i++) {
            this.dicesValue[i] = Math.floor(Math.random() * 6) + 1;
        }

        const currentScore = this.dicesValue.reduce(function (acc, val) { return acc + val; }, 0)

        if (this.savedScores.length == 5) {
            this.savedScores.shift();
        }
        this.savedScores.push(currentScore);

        this.forceUpdate();
    }

    renderLineOfDice(indexLine, nbDice) {

        const listOfDice = new Array(nbDice);

        const percentBasis = 100/nbDice + "%"

        for (let i = 0; i < nbDice; i++) {

            const dice = <View style={{flexBasis: percentBasis, marginHorizontal:4}}><Dice face={this.dicesValue[indexLine * this.maxDicesNumberPerLines + i]}></Dice></View>


            listOfDice[i] = dice;
        }

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent:"center",
                }}>
                {listOfDice.map((dice) => { return dice })}

            </View>
        )

    }

    async componentDidMount() {
        try {
            const valueSaved = await AsyncStorage.getItem('nbDice');
            if (valueSaved !== null) {
                this.nbDice = Number.parseInt(valueSaved, 10);
            }

            this.forceUpdate();

        } catch (e) {
        }
    }

    render() {

        let nbLines = Math.trunc(this.nbDice / this.maxDicesNumberPerLines);

        let nbDicesLastLine = this.nbDice - this.maxDicesNumberPerLines * nbLines;

        if (nbDicesLastLine > 0) {
            nbLines = nbLines + 1;
        } else {
            nbDicesLastLine = this.maxDicesNumberPerLines;
        }

        const listOfLine = [nbLines];

        for (let i = 0; i < nbLines; i++) {

            let nbDicesOfTheLine = this.maxDicesNumberPerLines;

            if (i + 1 == nbLines) {
                nbDicesOfTheLine = nbDicesLastLine
            }

            listOfLine[i] = this.renderLineOfDice(i, nbDicesOfTheLine);

        }

        return (
            <View
                style={
                    styles.table
                }>

                <View
                    style={
                        styles.diceZone
                    }>
                    {listOfLine.map((line, index) => { return line })}
                </View>


                <Scores savedScores={this.savedScores} ></Scores>


            </View>

        );
    }
}