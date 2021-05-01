import React, { useState, useContext } from "react";
import { Text, View, Alert } from "react-native";
import { RadioButton, TextInput, Button } from "react-native-paper";

export const SearchForm = ({ submitHandler }) => {
  const [searchType, setSearchType] = useState("all");
  const [searchValue, setSearchValue] = useState("all");

  return (
    <View>
      <Text style={{ fontSize: "30%" }}>Search by</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setSearchType(newValue)}
        value={searchType}
      >
        <View style={{ flexDirection: "row" }}>
          <RadioButton value="all" />
          <Text style={{ fontSize: "25%" }}>Search All</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton value="state" />
          <Text style={{ fontSize: "25%" }}>By State</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton value="city" />
          <Text style={{ fontSize: "25%" }}>By City</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton value="zip" />
          <Text style={{ fontSize: "25%" }}>By Zip code</Text>
        </View>
      </RadioButton.Group>
      <TextInput
        label=""
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
      <Button
        icon="magnify"
        mode="contained"
        onPress={() => submitHandler(searchType, searchValue)}
      >
        Search
      </Button>
    </View>
  );
};
