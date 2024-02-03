import { render, fireEvent } from "@testing-library/react-native";
import { AddWorkoutFolderFAB } from "../AddWorkoutFolderFAB";

describe("AddWorkoutFolderFAB", () => {
  let mockOnPress: jest.Func;

  beforeEach(() => {
    mockOnPress = jest.fn();
  });

  it("Renders", () => {
    const { getByTestId } = render(<AddWorkoutFolderFAB onPress={mockOnPress} />)

    const fab = getByTestId("add-folder-fab");
    expect(fab).toBeTruthy();
  });

  it("Calls the onPress function prop passed on when pressed", () => {
    const { getByTestId } = render(<AddWorkoutFolderFAB onPress={mockOnPress} />)

    const fab = getByTestId("add-folder-fab");
    fireEvent.press(fab);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
