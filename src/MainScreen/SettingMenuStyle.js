import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    width: "80%",
    flexDirection: "column",
    backgroundColor: "#189AB4",
    borderRadius: 20,
  },

  line: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  title: {
    margin: 10,
    marginBottom: 5,
    fontFamily: "theboldfont",
    color: "#D4F1F4",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    fontSize: 25,
  },

  propertie: {
    flex: 1,
    marginLeft: 20,
    fontFamily: "theboldfont",
    fontSize: 20,
  },

  lineButton: {
    width: "100%",
  },

  switch: {
    marginRight: 20,
  },

  button: {
    margin: 10,
    marginTop: 5,
    backgroundColor: "#05445E",
    alignItems: "center",
    borderRadius: 20,
  },

  textButton: {
    color: "#D4F1F4",
    fontFamily: "theboldfont",
    fontSize: 30,
  },
});

export default styles;
