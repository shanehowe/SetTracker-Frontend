import {
  Portal,
  Snackbar as PaperSnackbar,
} from "react-native-paper";
import { useSnack, useSnackState } from "../../contexts/SnackbarContext";

export const Snackbar = () => {

  const snackState = useSnackState();
  const { close } = useSnack();

  return (
    <Portal>
      <PaperSnackbar
        visible={snackState.open}
        onDismiss={close}
        duration={3000}
        icon={snackState.severity === "error" ? "alert" : "check"}
        onIconPress={close}
      >
        {snackState.message}
      </PaperSnackbar>
    </Portal>
  );
};
