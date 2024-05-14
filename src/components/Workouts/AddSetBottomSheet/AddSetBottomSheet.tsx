import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  InputAccessoryView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import { NumberInput } from "../NumberInput/NumberInput";
import { Button, useTheme } from "react-native-paper";
import { useReducedMotion } from "react-native-reanimated";
import { useMemo, useState, forwardRef } from "react";
import { View } from "react-native";
import { WeightIncrementToolbar } from "../WeightIncrementToolBar/WeightIncrementToolBar";
import { useAddSetMutation } from "../../../hooks/useAddSetMutation";
import { useSnack } from "../../../contexts/SnackbarContext";
import { ExerciseSet } from "../../../types";
import { HelperText } from "../../Notifications/HelperText/HelperText";

interface AddSetBottomSheetProps {
  ref: React.RefObject<BottomSheetModal>;
  handleModalClose: () => void;
  exerciseId: string;
}

export const AddSetBottomSheet = forwardRef<
  BottomSheetModal,
  AddSetBottomSheetProps
>(({ handleModalClose, exerciseId }, ref) => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [weightHelperTextVisible, setWeightHelperTextVisible] = useState(false);
  const [repsHelperTextVisible, setRepsHelperTextVisible] = useState(false);

  const snack = useSnack();
  const id = "weightId";

  const closeModal = () => {
    setReps("");
    setWeight("");
    setRepsHelperTextVisible(false);
    setWeightHelperTextVisible(false);
    handleModalClose();
  };

  const onAddSetSuccess = (createdSet: ExerciseSet) => {
    snack.success("Set created!");
    closeModal();
  };

  const onAddSetError = (error: Error) => {
    snack.error("Failed to create set. Please try again.");
  };

  const addSetMutation = useAddSetMutation(onAddSetSuccess, onAddSetError);

  const handleAddSetPress = () => {
    const weightNumber = Number(weight);
    const repsNumber = Number(reps);

    if (isNaN(weightNumber) || weightNumber <= 0) {
      setWeightHelperTextVisible(true);
      return;
    }

    if (isNaN(repsNumber) || repsNumber <= 0) {
      setRepsHelperTextVisible(true);
      return;
    }

    addSetMutation.mutate({
      exerciseId,
      weight: Number(weight),
      reps: Number(reps),
    });
  };

  const handleWeightChange = (weightIncrement: number) => {
    let newWeight;
    if (weight.length === 0) {
      newWeight = weightIncrement;
    } else {
      newWeight = Number(weight) + weightIncrement;
    }

    if (newWeight < 0 || isNaN(newWeight)) {
      setWeight("0");
    } else {
      setWeight(newWeight.toString());
    }
  };

  const reducedMotion = useReducedMotion();
  const theme = useTheme();

  const snapPoints = useMemo(() => ["77%"], []);

  return (
    <BottomSheetModal
      style={[{ backgroundColor: theme.colors.background }]}
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      animateOnMount={!reducedMotion}
    >
      <View
        style={[
          {
            backgroundColor: theme.colors.background,
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={[styles.center, { flex: 2 }]}
        >
          <NumberInput
            increment={0.25}
            decrement={0.25}
            value={weight}
            onChange={setWeight}
            label="Weight"
            inputAccessoryViewID={id}
          />
          <HelperText
            visible={weightHelperTextVisible}
            text="Weight must be a valid number greather than zero."
          />
          <NumberInput
            increment={1}
            decrement={1}
            value={reps}
            onChange={setReps}
            label="Reps"
          />
          <HelperText
            visible={repsHelperTextVisible}
            text="Reps must be a valid number greather than zero."
          />
        </KeyboardAvoidingView>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={handleAddSetPress}
          >
            Add Set
          </Button>
          <Button onPress={closeModal}>Close</Button>
        </View>
      </View>
      {Platform.OS === "ios" && (
        <InputAccessoryView
          nativeID={id}
          style={{ backgroundColor: theme.colors.inversePrimary }}
        >
          <WeightIncrementToolbar onIncrement={handleWeightChange} />
        </InputAccessoryView>
      )}
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 5,
  },
  buttonsContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginTop: 10,
    gap: 10,
  },
  button: {
    width: "80%",
    margin: 5,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
