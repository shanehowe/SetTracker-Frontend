import { Exercise } from "../../../../types";
import { ExerciseList } from "../ExerciseList";
import { render } from "@testing-library/react-native";

describe("ExerciseList", () => {
  const exercises: Exercise[] = [
    { id: "1", name: "exercise1" },
  ];

  it("renders the list of exercises", () => {
    const { getByTestId } = render(
      <ExerciseList exercises={exercises} />
    );

    const exerciseList = getByTestId("exercise-list");
    expect(exerciseList).toBeTruthy();
  });

  it("renders the exercise items", () => {
    const { getByText } = render(
      <ExerciseList exercises={exercises} />
    );

    const exerciseItem = getByText("exercise1");
    expect(exerciseItem).toBeTruthy();
  });
});