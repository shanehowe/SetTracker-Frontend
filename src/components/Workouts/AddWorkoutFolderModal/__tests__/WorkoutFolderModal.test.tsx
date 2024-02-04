import { render } from "@testing-library/react-native";
import { AddWorkoutFolderModal } from "../AddWorkoutFolderModal";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
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

    const textInput = getByTestId("add-folder-text-input");
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
});
