import { View, StyleSheet } from "react-native";
import { Button, Modal, Portal, Text, useTheme } from "react-native-paper";

interface ConfirmDeleteModalProps {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ConfirmDeleteModal = ({
  visible,
  onConfirm,
  onDismiss,
  title,
  message,
}: ConfirmDeleteModalProps) => {
  const theme = useTheme();
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={[
          styles.modal,
          { backgroundColor: theme.colors.background },
        ]}
        testID="confirm-delete-modal"
      >
        <View style={styles.titleView}>
          <Text variant="titleMedium">{title}</Text>
        </View>

        <View>
          <Text>{message}</Text>
        </View>

        <View style={styles.buttonsView}>
          <Button
            testID="confirm-button"
            onPress={onConfirm}
            textColor={theme.colors.onError}
            buttonColor={theme.colors.error}
            icon={"delete"}
          >
            Confirm
          </Button>

          <Button testID="cancel-button" onPress={onDismiss}>
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

    justifyContent: "space-around",
  },
  footer: {
    gap: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  titleView: {
    paddingBottom: 20,
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
});
