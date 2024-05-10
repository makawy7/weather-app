import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ArcComponent from "./ArcComponent";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";

const WeatherTabbar = () => {
  const { height, width } = useApplicationDimensions();
  const tabbarHeight = height * 0.1184834123;
  return (
    <View
      style={{
        height: tabbarHeight,
        backgroundColor: "green",
        ...StyleSheet.absoluteFillObject,
        top: height - tabbarHeight,
        justifyContent: "flex-end",
      }}
    >
      <ArcComponent height={height} width={width} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherTabbar;
