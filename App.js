//----------------------------------------------------------------------------//
//---------------Starting new App--------------------------------------------//

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Button,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalsItems";
import GoaInput from "./components/GoalsInput";
import GoalInput from "./components/GoalsInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setAddMode(false);
  };
  const removeCouseGoal = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelAddGoal = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeCouseGoal}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
