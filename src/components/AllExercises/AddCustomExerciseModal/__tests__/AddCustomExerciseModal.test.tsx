import { fireEvent, render } from "@testing-library/react-native";
import { AddCustomExerciseModal } from "../AddCustomExerciseModal";
import { AllTheProviders } from "../../../../test-utils";

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
});