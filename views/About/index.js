import React, { useState, useContext } from "react";
import {
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

export const AboutScreen = ({ route, navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/about.png")}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
      }}
    ></ImageBackground>
  );
};
