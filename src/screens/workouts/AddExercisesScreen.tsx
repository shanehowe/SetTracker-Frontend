import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "../../components/Workouts/Searchbar/Searchbar";
import { ExerciseCheckboxList } from "../../components/Workouts/ExerciseCheckboxList/ExerciseCheckboxList";
import { useState } from "react";
import { useExercises } from "../../hooks/useExercises";
import { ScreenProps } from "../../interfaces";
import { Button, Text, useTheme } from "react-native-paper";

export const AddExercisesScreen = ({ navigation }: ScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, isError, error, exercises } = useExercises(searchQuery);
  const theme = useTheme();

  const onChangeSearch = (query: string) => setSearchQuery(query);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <View style={styles.searchbarContainer}>
        <Searchbar
          searchFilter={searchQuery}
          handleSearchChange={onChangeSearch}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.checkboxContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <ExerciseCheckboxList
          exercises={exercises}
          selectedExercises={[exercises[0]]}
          onExerciseSelect={() => {}}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.goBack()}>
          Confirm Selection
        </Button>

        <Button onPress={() => navigation.goBack()}>Cancel</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 10,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
  },

  checkboxContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
    marginTop: 16,
  },
  buttonContainer: {
    justifyContent: "space-around",
    margin: 10,
    gap: 10,
    width: "90%",
    alignSelf: "center",
  },
});
