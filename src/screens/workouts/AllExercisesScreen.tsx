import { Text, useTheme } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "../../components/Workouts/Searchbar/Searchbar";
import { AllExerciseList } from "../../components/Workouts/AllExercisesList/AllExercisesList";
import { useState } from "react";
import { AddCustomExerciseModal } from "../../components/Workouts/AddCustomExerciseModal/AddCustomExerciseModal";

export const AllExercisesScreen = ({ navigation }: ScreenProps) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const handleSearchChange = (text: string) => {
    setSearchFilter(text);
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

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
          <AllExerciseList
            searchFilter={searchFilter}
            showModal={showModal}
          />
        </View>
      </ScrollView>
      <AddCustomExerciseModal
        handleSearchChange={handleSearchChange}
        visible={modalVisible}
        hideModal={hideModal}
      />
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
