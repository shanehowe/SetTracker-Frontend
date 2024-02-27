import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { NumberInput } from "../NumberInput/NumberInput";
import { Button, useTheme } from "react-native-paper";
import { useReducedMotion } from "react-native-reanimated";
import { useMemo, useState, forwardRef } from "react";

interface AddSetBottomSheetProps {
  ref: React.RefObject<BottomSheetModal>;
  handleSheetChanges: (index: number) => void;
  handleModalClose: () => void;
}

export const AddSetBottomSheet = forwardRef<BottomSheetModal, AddSetBottomSheetProps>(({
  handleSheetChanges,
  handleModalClose,
}, ref) => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const reducedMotion = useReducedMotion();
  const theme = useTheme();

  const snapPoints = useMemo(() => ["75%"], []);

  return (
    <BottomSheetModal
      style={[{ backgroundColor: theme.colors.background }]}
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      animateOnMount={!reducedMotion}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={[{ backgroundColor: theme.colors.background }, styles.container]}
      >
        <NumberInput
          increment={0.25}
          decrement={0.25}
          value={weight}
          onChange={setWeight}
          label="Weight"
        />
        <NumberInput
          increment={1}
          decrement={1}
          value={reps}
          onChange={setReps}
          label="Reps"
        />
        <Button onPress={handleModalClose}>Add Set</Button>
      </KeyboardAvoidingView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 5,
  },
});