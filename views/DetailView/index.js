import React, { useState, useContext } from "react";
import {
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export const DetailViewScreen = ({ route, navigation }) => {
  const { unit } = route.params;
  return (
    <ScrollView>
      <Card key={unit.id} style={{ marginBottom: "5%" }}>
        <Card.Cover source={{ uri: unit.image }} />
        <View style={{ flexDirection: "row" }}>
          <Card.Title
            title={unit.address}
            subtitle={unit.city + " " + unit.state + " " + unit.zip}
            style={{ flex: 50 }}
          />
          <Card.Content>
            <Title>Lease Details</Title>
            <Paragraph>{unit.details}</Paragraph>
          </Card.Content>
        </View>
      </Card>
    </ScrollView>
  );
};
