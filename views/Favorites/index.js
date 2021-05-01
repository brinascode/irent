import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
  Alert,
  TouchableHighlight,
  FlatList,
} from "react-native";
import Toast from "react-native-toast-message";
import { Card } from "react-native-paper";
import { AppContext } from "../../state/GlobalState";
import { Icon } from "react-native-elements";
export const FavoritesScreen = ({ navigation }) => {
  const { globalState } = useContext(AppContext);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    //Make the remove live
    let toPush = [];
    globalState.rentalData.forEach((unit) => {
      if (globalState.favorites.indexOf(unit.id) != -1) {
        toPush.push(unit);
      }
    });
    setFavorites(toPush);
    console.log("My favs are", toPush);
  }, []);

  const renderItem = ({ item }) => (
    <Card key={item.id} style={{ marginBottom: "5%" }}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("DetailView", { unit: item });
        }}
      >
        <Card.Cover source={{ uri: item.image }} />
      </TouchableHighlight>

      <View style={{ flexDirection: "row" }}>
        <Card.Title
          title={item.address}
          subtitle={item.city + " " + item.state + " " + item.zip}
          style={{ flex: 50 }}
        />
        <Card.Actions>
          <Text>Remove</Text>
          <Icon
            raised
            name="delete"
            color="#f50"
            size="30"
            onPress={() => {
              globalState.favorites.splice(
                globalState.rentalData.indexOf(item),
                1
              );
              console.log(globalState.favorites);
              Toast.show({
                text1: "Unit removed from favorites",
              });
            }}
          />
        </Card.Actions>
      </View>
    </Card>
  );

  return <FlatList data={favorites} renderItem={renderItem} />;
};
