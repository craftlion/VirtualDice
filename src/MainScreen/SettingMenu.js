import React, { useState } from "react";
import { Modal, Text, Switch, Button, TouchableHighlight } from "react-native";
import { View } from "react-native";
import Model from "../Model";
import styles from "./SettingMenuStyle";

export default function SettingMenu(props) {
  const [isSoundEnabled, setSoundEnabled] = useState(Model.soundModeActive);
  const [isAnimEnabled, setAnimEnabled] = useState(Model.animModeActive);
  const [isVibrationEnabled, setVibrationEnabled] = useState(
    Model.vibrationActive
  );

  function toggleSwitchSoundMode(state) {
    Model.saveSoundMode(state);
    setSoundEnabled(state);
  }

  function toggleSwitchAnimMode(state) {
    Model.saveAnimMode(state);
    setAnimEnabled(state);
  }

  function toggleSwitchVibrateMode(state) {
    Model.saveVibrationMode(state);
    setVibrationEnabled(state);
  }

  function quit() {
    props.parent.openToolsMenu();
  }

  return (
    <Modal transparent={true} visible={true} animationType="none">
      <View style={styles.mainContainerModal}>
        <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.line}>
            <Text style={styles.propertie}>Sound</Text>
            <Switch
              style={styles.switch}
              onValueChange={toggleSwitchSoundMode}
              value={isSoundEnabled}
            />
          </View>
          <View style={styles.line}>
            <Text style={styles.propertie}>Animated</Text>
            <Switch
              style={styles.switch}
              onValueChange={toggleSwitchAnimMode}
              value={isAnimEnabled}
            />
          </View>

          <View style={styles.line}>
            <Text style={styles.propertie}>Vibrate</Text>
            <Switch
              style={styles.switch}
              onValueChange={toggleSwitchVibrateMode}
              value={isVibrationEnabled}
            />
          </View>

          <View style={styles.lineButton}>
            <TouchableHighlight style={styles.button} onPress={quit}>
              <Text style={styles.textButton}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}
