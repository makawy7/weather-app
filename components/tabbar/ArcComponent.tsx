import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ArcProps = {
  height: number;
  width: number;
};

const ArcComponent: React.FC<ArcProps> = ({ height, width }) => {
  const arcHeight = height * 0.1042654028;
  return (
    <View
      style={{
        height: arcHeight,
        backgroundColor: "#444C8E",
      }}
    >
      <Text style={{ color: "white" }}>Arc Compontent</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ArcComponent;
