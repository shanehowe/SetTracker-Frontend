import { fireEvent, render } from "@testing-library/react-native";
import { AddWorkoutFolderModal } from "../AddWorkoutFolderModal";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";
import * as workoutFolderValidation from "../../../../validation/workoutFolderValidation";

const mockedMutation = jest.fn();

jest.mock("../../../../hooks/useAddFolderMutation", () => ({
  useAddFolderMutation: () => ({
    mutate: mockedMutation,
  }),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PaperProvider>
  );
};

describe("AddWorkoutFolderModal", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );

    const modal = getByTestId("add-workout-folder-modal");
    expect(modal).toBeTruthy();
  });

  it("renders a descriptive title", () => {
    const { getByText } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );
    const textInput = getByText("Add Workout Folder");
    expect(textInput).toBeTruthy();
  });

  it("renders a text input", () => {
    const { getByTestId } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );

    const textInput = getByTestId("text-input");
    expect(textInput).toBeTruthy();
  });

  it("renders a button for adding a workout folder", () => {
    const { getByTestId } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );

    const addButton = getByTestId("add-button");
    expect(addButton).toBeTruthy();
  });

  it("renders the cancel button for hiding the modal", () => {
    const { getByTestId } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );

    const cancelButton = getByTestId("cancel-modal-button");
    expect(cancelButton).toBeTruthy();
  });

  it("calls add folder mutation when pressing add button", () => {
    const { getByTestId } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );

    const textInput = getByTestId("text-input");
    const addButton = getByTestId("add-button");

    fireEvent.changeText(textInput, "some name");
    fireEvent.press(addButton);

    expect(mockedMutation).toHaveBeenCalledWith("some name");
  });

  it("displays an error message when pressing add button and input is invalid", () => {
    const spy = jest
      .spyOn(workoutFolderValidation, "isValidFolderName")
      .mockReturnValue({ isValid: false, message: "should be on the screen" });
    const { getByTestId, getByText } = render(
      <AddWorkoutFolderModal visible={true} hideModal={() => {}} />,
      { wrapper }
    );
    const addButton = getByTestId("add-button");

    fireEvent.press(addButton);

    expect(getByText("should be on the screen")).toBeOnTheScreen();
    spy.mockReset();
    spy.mockRestore();
  });
});
