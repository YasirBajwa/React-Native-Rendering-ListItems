import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItems = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginVertical: 10
  }
});

export default GoalItems;
