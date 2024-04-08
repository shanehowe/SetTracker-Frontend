import { render } from "@testing-library/react-native";
import { ExerciseCheckboxList } from "../ExerciseCheckboxList";

describe("ExerciseCheckboxList", () => {
  const exercises = [
    {
      id: "1",
      name: "Bench Press",
    },
    {
      id: "2",
      name: "Squat",
    },
  ];

  const selectedExercises = [
    {
      id: "1",
      name: "Bench Press",
    },
  ];

  it("should render correctly", () => {
    const { getByTestId } = render(
      <ExerciseCheckboxList
        selectedExercises={selectedExercises}
        exercises={exercises}
        onExerciseSelect={() => {}}
      />
    );

    const container = getByTestId("exercise-checkbox-list");
    expect(container).toBeTruthy();
  });

  it("should render ExerciseCheckbox for each exercise", () => {
    const { getAllByTestId } = render(
      <ExerciseCheckboxList
        selectedExercises={selectedExercises}
        exercises={exercises}
        onExerciseSelect={() => {}}
      />
    );

    const components = getAllByTestId("exercise-checkbox-container");
    expect(components).toHaveLength(2);
  });

  it("should pass isSelected prop to ExerciseCheckbox", () => {
    const { getAllByTestId } = render(
      <ExerciseCheckboxList
        selectedExercises={selectedExercises}
        exercises={exercises}
        onExerciseSelect={() => {}}
      />
    );

    const components = getAllByTestId("exercise-checkbox");
    expect(components[0].props.accessibilityState.checked).toBe(true);
    expect(components[1].props.accessibilityState.checked).toBe(false);
  });
});
