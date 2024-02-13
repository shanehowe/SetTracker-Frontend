import { fireEvent, render } from "@testing-library/react-native";
import { ExerciseCheckbox } from "../ExerciseCheckbox";

describe("ExerciseCheckbox", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(
      <ExerciseCheckbox
        isSelected={true}
        onExerciseSelect={() => {}}
        exercise={{
          id: "1",
          name: "Bench Press",
        }}
      />
    );

    const container = getByTestId("exercise-checkbox-container");
    const component = getByTestId("exercise-checkbox");

    expect(component).toBeTruthy();
    expect(container).toBeTruthy();
  });

  it("calls onExerciseSelect when checkbox is pressed", () => {
    const onExerciseSelect = jest.fn();
    const { getByTestId } = render(
      <ExerciseCheckbox
        isSelected={false}
        onExerciseSelect={onExerciseSelect}
        exercise={{
          id: "1",
          name: "Bench Press",
        }}
      />
    );
    const component = getByTestId("exercise-checkbox");

    fireEvent.press(component);
    expect(onExerciseSelect).toHaveBeenCalledTimes(1);
  });
});
