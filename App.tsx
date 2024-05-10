import { StatusBar } from "expo-status-bar";
import HomeBackground from "./components/HomeBackground";
import WeatherTabbar from "./components/tabbar/WeatherTabbar";
export default function App() {
  return (
    <>
      <HomeBackground />
      <WeatherTabbar />
      <StatusBar style="light" />
    </>
  );
}
