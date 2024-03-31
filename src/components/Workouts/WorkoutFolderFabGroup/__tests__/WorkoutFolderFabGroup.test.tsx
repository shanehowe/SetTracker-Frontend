import { render } from "@testing-library/react-native";
import { WorkoutFolderFabGroup } from "../WorkoutFolderFabGroup";
import { AllTheProviders } from "../../../../test-utils";

describe("WorkoutFolderFabGroup", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <WorkoutFolderFabGroup
        visible={true}
        handleRenameFolderClick={() => {}}
        handleDeleteFolderClick={() => {}}
        folderId="1"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("workout-folder-fab-group")).toBeTruthy();
  });
});
