import { render } from "@testing-library/react-native";
import { EmptyFolderExerciseList } from "../EmptyFolderExerciseList";
import { AllTheProviders } from "../../../../test-utils";

describe("EmptyFolderExerciseList", () => {
  it("should render on the screen", () => {
    const { getByTestId } = render(
      <EmptyFolderExerciseList folderId="1" />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("empty-folder-exercise-list-container")).toBeTruthy();
  });

  it("should display a helpful message on how to add exercises to the folder", ()=> {
    const { getByText } = render(
      <EmptyFolderExerciseList folderId="1" />,
      { wrapper: AllTheProviders }
    );

    expect(getByText("Press the button below to get started")).toBeTruthy();
  });
});