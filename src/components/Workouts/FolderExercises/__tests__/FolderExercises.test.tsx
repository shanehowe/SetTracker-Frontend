import { render } from "@testing-library/react-native";
import { FolderExercises } from "../FolderExercises";

describe("FolderExercises", () => {
  it("renders", () => {
    const { getByTestId } = render(<FolderExercises />);

    const container = getByTestId("folder-exercises-container");
    expect(container).toBeTruthy();
  });
});