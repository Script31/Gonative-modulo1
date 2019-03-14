import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: "Gonative!"
};
Todo.propTypes = {
  title: PropTypes.string.isrequired
};

const styles = StyleSheet.create({});

export default Todo;
