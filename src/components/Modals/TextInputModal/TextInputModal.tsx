import { View, StyleSheet } from "react-native";
import {
  Button,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useKeyboardAdjustment } from "../../../hooks/useKeyboardAdjustment";

interface TextInputModalProps {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  placeholder: string;
  onChageText: (text: string) => void;
  onSubmit: () => void;
  testID: string;
  errorMessage: string
}

export const TextInputModal = ({
  visible,
  onDismiss,
  title,
  placeholder,
  onChageText,
  onSubmit,
  testID,
  errorMessage
}: TextInputModalProps) => {
  const theme = useTheme();
  const bottom = useKeyboardAdjustment();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={[
          styles.modal,
          { backgroundColor: theme.colors.background, bottom },
        ]}
        testID={testID}
      >
        <View>
          <Text variant="titleMedium">{title}</Text>
        </View>

        <View>
          <TextInput
            onChangeText={onChageText}
            mode="outlined"
            label={placeholder}
            testID="text-input"
          />
          <View>
            <Text style={{ color: theme.colors.error, paddingVertical: 7 }}>{errorMessage}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button mode="contained" onPress={onSubmit} testID="add-button">
            Confirm
          </Button>
          <Button
            onPress={onDismiss}
            testID="cancel-modal-button"
          >
            Cancel
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    height: 300,
    justifyContent: "space-around",
  },
  footer: {
    gap: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
