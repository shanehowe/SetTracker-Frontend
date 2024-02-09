import { fireEvent, render } from "@testing-library/react-native";
import { AddCustomExerciseModal } from "../AddCustomExerciseModal";
import { AllTheProviders } from "../../../../test-utils";

const mockedMutation = jest.fn();
jest.mock("../../../../hooks/useAddCustomExerciseMutation", () => ({
  useAddCustomExerciseMutation: () => ({
    mutate: mockedMutation
  })
}));

describe("Add Custom Exercise Modal", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(
      <AddCustomExerciseModal
        visible={true}
        hideModal={() => {}}
      />,
      { wrapper: AllTheProviders }
    );
    expect(getByTestId("add-custom-exercise-modal")).toBeTruthy();
  });

  it("should render the correct title", () => {
    const { getByText } = render(
      <AddCustomExerciseModal
        visible={true}
        hideModal={() => {}}
      />,
      { wrapper: AllTheProviders }
    );
    expect(getByText("Add Custom Exercise")).toBeTruthy();
  });

  it("should render the correct input fields", () => {
    const { getByTestId } = render(
      <AddCustomExerciseModal
        visible={true}
        hideModal={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("exercise-name-input")).toBeTruthy();
  });

  it("should render the correct buttons", () => {
    const { getByTestId } = render(
      <AddCustomExerciseModal
        visible={true}
        hideModal={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("cancel-button")).toBeTruthy();
    expect(getByTestId("add-button")).toBeTruthy();
  });

  it("Calls the hideModal function when the cancel button is pressed", () => {
    const hideModal = jest.fn();
    const { getByTestId } = render(
      <AddCustomExerciseModal
        visible={true}
        hideModal={hideModal}
      />,
      { wrapper: AllTheProviders }
    );

    const cancelButton = getByTestId("cancel-button");
    fireEvent.press(cancelButton);

    expect(hideModal).toHaveBeenCalledTimes(1);
  });

  it("calls the addCustomExerciseMutation when the add button is pressed", () => {
    const hideModal = jest.fn();
    const { getByTestId } = render(
      <AddCustomExerciseModal
        visible={true}
        hideModal={hideModal}
      />,
      { wrapper: AllTheProviders }
    );

    const addButton = getByTestId("add-button");
    fireEvent.press(addButton);

    expect(mockedMutation).toHaveBeenCalledTimes(1);
  });
});