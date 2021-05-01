import React, { useState, useContext } from "react";
import {
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
  Alert,
  TouchableHighlight,
} from "react-native";
import Toast from "react-native-toast-message";
import { Card } from "react-native-paper";
import { SearchForm } from "./SearchForm";
import { AppContext } from "../../state/GlobalState";
import { Icon } from "react-native-elements";

const Results = ({ data, navigation }) => {
  const { globalState } = useContext(AppContext);
  return (
    <ScrollView>
      {data.map((unit) => {
        return (
          <Card key={unit.id} style={{ marginBottom: "5%" }}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("DetailView", { unit: unit });
              }}
            >
              <Card.Cover source={{ uri: unit.image }} />
            </TouchableHighlight>
            <View style={{ flexDirection: "row" }}>
              <Card.Title
                title={unit.address}
                subtitle={unit.city + " " + unit.state + " " + unit.zip}
                style={{ flex: 50 }}
              />
              <Card.Actions>
                <Text>Save</Text>
                <Icon
                  raised
                  name="heart"
                  type="font-awesome"
                  color="#f50"
                  size="30"
                  onPress={() => {
                    if (!globalState.favorites.includes(unit.id)) {
                      globalState.favorites.push(unit.id);
                      Toast.show({
                        text1: "Unit added to favorites",
                      });
                      console.log(globalState.favorites);
                    } else {
                      Toast.show({
                        text1: "Unit already in favorites",
                      });
                    }
                  }}
                />
              </Card.Actions>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export const SearchScreen = ({ navigation }) => {
  const { globalState } = useContext(AppContext);
  const [showAll, setShowAll] = useState(true);
  const [searchResults, setSearchResults] = useState({});

  const searchRentals = (type, value) => {
    if (type === "all") {
      setShowAll(true);
    } else {
      let results = globalState.rentalData.filter((unit) => {
        return unit[type] === value; //add lower case and upper case validation. Not working*
      });
      console.log(results);
      setShowAll(false);
      setSearchResults(results);
    }
  };

  return (
    <ScrollView>
      <SearchForm submitHandler={searchRentals} />

      <Text style={{ padding: "10%", textAlign: "center", fontSize: "25%" }}>
        Rentals Found:
      </Text>
      {showAll ? (
        <Results data={globalState.rentalData} navigation={navigation} />
      ) : (
        <Results data={searchResults} navigation={navigation} />
      )}
    </ScrollView>
  );
};
