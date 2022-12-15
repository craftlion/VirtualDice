import { Component } from "react";
import Dice0 from "../../assets/svg/Dice0SVG";
import Dice1 from "../../assets/svg/Dice1SVG";
import Dice2 from "../../assets/svg/Dice2SVG";
import Dice3 from "../../assets/svg/Dice3SVG";
import Dice4 from "../../assets/svg/Dice4SVG";
import Dice5 from "../../assets/svg/Dice5SVG";
import Dice6 from "../../assets/svg/Dice6SVG";

export default class Dice extends Component {
  static diceSVG = [
    <Dice0 />,
    <Dice1 />,
    <Dice2 />,
    <Dice3 />,
    <Dice4 />,
    <Dice5 />,
    <Dice6 />,
  ];

  constructor(props) {
    super(props);
    this.value = 0;
  }

  getValue() {
    return this.value;
  }

  randomValue() {
    this.value = Math.floor(Math.random() * 6) + 1;

    return this.value;
  }

  resetDefaultValue() {
    this.value = 0;
  }

  render() {
    return Dice.diceSVG[this.value];
  }
}
