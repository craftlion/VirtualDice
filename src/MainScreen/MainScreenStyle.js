import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#950000",
  },

  titleZone: {
    backgroundColor: "#fb7600",
    flex: 3,
    flexDirection: "row",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  title: {
    flex: 1,
    fontFamily: "Luna",
    color: "black",
    fontSize: 25,
    textAlign: "center",
  },

  toolsIcon: {
    marginRight: 30,
    marginLeft: -35,
    height: "50%",
    width: undefined,
    aspectRatio: 1,
    alignSelf: "center",
  },

  buttonsDiceZone: {
    flex: 5,
    flexDirection: "row",
  },

  buttonAddDice: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#fb7600",
    margin: 5,
    marginRight: 10,
  },
  buttonAddDiceTop: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#fff07c",
    marginBottom: 5,
  },
  textButtonAddDice: {
    fontFamily: "theboldfont",
    fontSize: 40,
    textAlign: "center",
  },

  buttonRemoveDice: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#fb7600",
    margin: 5,
    marginLeft: 10,
  },
  buttonRemoveDiceTop: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#fff07c",
    marginBottom: 5,
  },
  textButtonRemoveDice: {
    fontFamily: "theboldfont",
    fontSize: 40,
    textAlign: "center",
  },

  buttonLaunch: {
    backgroundColor: "#fff07c",
    flex: 5,
    borderRadius: 15,
    margin: 10,
    marginTop: 5,
  },
  buttonLaunchTop: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#fb7600",
  },
  textButtonLaunch: {
    fontFamily: "theboldfont",
    color: "white",
    fontSize: 40,
    textAlign: "center",
  },
});

export default styles;
