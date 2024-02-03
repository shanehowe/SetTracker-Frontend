import { render } from "@testing-library/react-native";
import { Snackbar } from "../Snackbar";
import { SnackbarProvider } from "../../../../contexts/SnackbarContext";
import { PaperProvider } from "react-native-paper";

jest.mock("../../../../contexts/SnackbarContext", () => ({
  ...jest.requireActual("../../../../contexts/SnackbarContext"),
  useSnackState: () => ({
    open: true,
    message: "test message",
    severity: "success",
  }),
}));

describe("Snackbar", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <PaperProvider>
        <SnackbarProvider>
          <Snackbar />
        </SnackbarProvider>
      </PaperProvider>
    );

    const snackbar = getByTestId("snackbar");
    expect(snackbar).toBeTruthy();
  });

  it("display the correct message based on state in useSnackState", () => {
    const { findByText } = render(
        <PaperProvider>
          <SnackbarProvider>
            <Snackbar />
          </SnackbarProvider>
        </PaperProvider>
      );

      const message = findByText("test message");
      expect(message).toBeTruthy();
  });
});
