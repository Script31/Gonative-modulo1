import "./config/ReactotronConfig";
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: "#333"
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#09a",
    margin: 10,
    transform: [{ rotateZ: "20deg" }]
  }
});
