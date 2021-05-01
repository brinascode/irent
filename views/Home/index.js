import React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

export const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://infatuation.s3.amazonaws.com/media/images/guides/best-rooftop-restaurants-nyc/NoahDevereaux_SummerGuide2018_654_GoodBehavior.JPG",
      }}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={styles.titleContainer}>
        <View style={{ justifyContent: "center" }}>
          <TouchableHighlight onPress={() => navigation.navigate("About")}>
            <Image
              source={require("../../assets/iRent.png")}
              style={{ right: "10%" }}
            />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            bottom: "20%",
          }}
        >
          <TouchableHighlight
            style={{ flex: 50, flexDirection: "row", justifyContent: "center" }}
          >
            <View>
              <Icon
                raised
                name="search"
                type="font-awesome"
                color="#f50"
                size="50"
                onPress={() => navigation.navigate("Search")}
              />
              <Text> Find a rental </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              flex: 50,
              flexDirection: "row",
              justifyContent: "center",
              underlayColor: "pink",
              activeOpacity: 0.6,
            }}
          >
            <View>
              <Icon
                raised
                name="heart"
                type="font-awesome"
                color="#f50"
                size="50"
                onPress={() => navigation.navigate("SavedUnits")}
              />
              <Text> View saved units </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    bottom: 100,
  },
  mainTitle: {
    fontSize: 40,
    fontFamily: "Arial",
    fontWeight: "500",
    textAlign: "center",
  },
});
