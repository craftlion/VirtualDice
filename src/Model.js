import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Model{

    static extractInProgress = false

    static nbDice = 1
    static soundModeActive = true
    static animModeActive = true

    static async extractValueFromStorage(){

        if(!Model.extractInProgress){

            Model.extractInProgress = true

            await Model.getNbDice()
            await Model.getSoundModeActive()
            await Model.getAnimModeActive()

            Model.extractInProgress = false

            return true
        }else{
            return false
        }
    }

    static async saveNbDice(nbDice){

        Model.nbDice = nbDice

        try {
            const valueToSave = nbDice.toString();
            await AsyncStorage.setItem("nbDice", valueToSave);
          } catch (e) {}
    }

    static async getNbDice(){

        try {
            const valueSaved = await AsyncStorage.getItem("nbDice");
            if (valueSaved !== null) {
              Model.nbDice = Number.parseInt(valueSaved, 10);
            }      
          } catch (e) {}
    }

    static async saveSoundMode(soundActive){

        Model.soundModeActive = soundActive

        try {
            valueToSave = soundActive.toString()
            await AsyncStorage.setItem("soundModeActive", valueToSave);
          } catch (e) {}
    }

    static async getSoundModeActive(){
        try {
            const valueSaved = await AsyncStorage.getItem("soundModeActive");
            if (valueSaved !== null) {
              Model.soundModeActive = valueSaved == "true";
            }      
          } catch (e) {}
    }

    static async saveAnimMode(animActive){

        Model.animModeActive = animActive

        try {
          valueToSave = animActive.toString()
            await AsyncStorage.setItem("animModeActive", valueToSave);
          } catch (e) {}
    }

    static async getAnimModeActive(){
        try {
            const valueSaved = await AsyncStorage.getItem("animModeActive");
            if (valueSaved !== null) {
              Model.animModeActive = valueSaved == "true";
            }      
          } catch (e) {}
    }
}