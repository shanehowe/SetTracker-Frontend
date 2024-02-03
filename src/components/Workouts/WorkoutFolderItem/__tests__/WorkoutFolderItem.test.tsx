import { render } from "@testing-library/react-native";
import { WorkoutFolderItem } from "../WorkoutFolderItem";
import { WorkoutFolder } from "../../../../types";

describe("WorkoutFolderItem", () => {
  const testFolder: WorkoutFolder = {
    id: "1",
    name: "Test Folder",
    exercises: [],
  };

  it("renders correctly", () => {
    const { getByTestId } = render(
      <WorkoutFolderItem folder={testFolder} showDivider={false} />
    );

    expect(getByTestId("workout-folder-item")).toBeDefined();
  });

  it("renders the correct folder name", () => {
    const { getByText } = render(
      <WorkoutFolderItem folder={testFolder} showDivider={false} />
    );
    
    expect(getByText("Test Folder")).toBeDefined();
  });

  it("renders a divider when showDivider is true", () => {
    const { getByTestId } = render(
      <WorkoutFolderItem folder={testFolder} showDivider={true} />
    );

    expect(getByTestId("workout-folder-divider")).toBeDefined();
  });
});