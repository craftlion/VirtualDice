import React, { useState } from "react";
import { Modal, Text, Switch, Button } from "react-native";
import Model from "../Model";
import styles from "./SettingMenuStyle";

export default function SettingMenu(props) {

  const [isSoundEnabled, setSoundEnabled] = useState(Model.soundModeActive);
  const [isAnimEnabled, setAnimEnabled] = useState(Model.animModeActive);

  function toggleSwitchSoundMode(state){
    Model.saveSoundMode(state);
    setSoundEnabled(state);
  }

  function toggleSwitchAnimMode(state){
    Model.saveAnimMode(state);
    setAnimEnabled(state);
  }

  function quit(){
    props.parent.openToolsMenu()
  }

  return (
    <Modal
    style={styles.container}
      animationType="slide"
      transparent={true}
      visible={true}
    ><Text>Setting</Text>
    <Text>Sound</Text>
    <Switch
    onValueChange={toggleSwitchSoundMode}
    value={isSoundEnabled}/>
    <Text>Animation</Text>
    <Switch
    onValueChange={toggleSwitchAnimMode}
    value={isAnimEnabled}/>
    <Button onPress={quit}
    title="Close"></Button></Modal>
  );
}
