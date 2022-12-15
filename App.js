import MainScreen from "./src/MainScreen/MainScreen";
import SplashScreen from "./src/SplashScreen/SplashScreen";
import { useFonts } from "expo-font";
import Model from "./src/Model";

export default function App() {
  loadStorage = Model.extractValueFromStorage();

  const [loadedFont] = useFonts({
    Kingthings_Organica: require("./assets/fonts/Kingthings_Organica.ttf"),
    Luna: require("./assets/fonts/Luna.ttf"),
    theboldfont: require("./assets/fonts/theboldfont.ttf"),
  });

  if (loadedFont && loadStorage) {
    return <MainScreen />;
  }

  return <SplashScreen />;
}
