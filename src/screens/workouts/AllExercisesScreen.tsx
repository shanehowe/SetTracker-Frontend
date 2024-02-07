import { Text, useTheme } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "../../components/AllExercises/Searchbar/Searchbar";
import { AllExerciseList } from "../../components/AllExercises/AllExercisesList/AllExercisesList";
import { useState } from "react";

export const AllExercisesScreen = ({ navigation }: ScreenProps) => {
  const [searchFilter, setSearchFilter] = useState("");
  const theme = useTheme();

  const handleSearchChange = (text: string) => {
    setSearchFilter(text);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <ScrollView >
        <View style={styles.container}>
          <Searchbar handleSearchChange={handleSearchChange} searchFilter={searchFilter} />
        </View>

        <View>
          <Text
            variant="titleMedium"
            style={styles.centerText}
          >
            All Exercises
          </Text>
        </View>

        <View style={styles.container}>
          <AllExerciseList searchFilter={searchFilter} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "90%",
    marginBottom: 20,
    alignSelf: "center",
  },
  centerText: {
    textAlign: "center"
  }
});
