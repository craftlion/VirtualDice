import { View, Text } from "react-native";
import React, { Component } from "react";
import styles from "./ScoresStyle";

export default class Scores extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reverseSavedScore = this.props.savedScores.map((x) => x);
    reverseSavedScore.reverse();

    var returnResult;

    if (reverseSavedScore.length != 0) {
      returnResult = reverseSavedScore.map((score, index) => {
        if (index == 0) {
          return <Text style={styles.firstScore}>{score}</Text>;
        } else {
          return <Text style={styles.score}>{score}</Text>;
        }
      });
    } else {
      returnResult = (
        <View style={{ opacity: 0.0 }}>
          <Text style={styles.firstScore}>0</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scores :</Text>

        {returnResult}
      </View>
    );
  }
}
