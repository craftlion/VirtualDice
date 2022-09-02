import MainScreen from "./src/MainScreen/MainScreen";
import SplashScreen from "./src/SplashScreen/SplashScreen";
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    frankfrt: require('./assets/fonts/frankfrt.ttf'),
    Kingthings_Organica: require('./assets/fonts/Kingthings_Organica.ttf'),
    Luna: require('./assets/fonts/Luna.ttf'),
    theboldfont: require('./assets/fonts/theboldfont.ttf'),

  });
  
  if (!loaded) {
    return <SplashScreen/>;
  }

  return <MainScreen/>;
}
