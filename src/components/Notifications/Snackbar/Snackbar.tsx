import {
  Portal,
  Snackbar as PaperSnackbar,
} from "react-native-paper";
import { useSnack, useSnackState } from "../../../contexts/SnackbarContext";

export const Snackbar = () => {

  const snackState = useSnackState();
  const { close } = useSnack();

  return (
    <Portal>
      <PaperSnackbar
        visible={snackState.open}
        onDismiss={close}
        duration={PaperSnackbar.DURATION_SHORT}
        icon={snackState.severity === "error" ? "alert" : "check"}
        onIconPress={close}
        testID="snackbar"
        style={{
          bottom: 50
        }}
      >
        {snackState.message}
      </PaperSnackbar>
    </Portal>
  );
};
