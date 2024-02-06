import { fireEvent, render } from "@testing-library/react-native";
import { ExerciseItem } from "../ExerciseItem";

describe("ExerciseItem", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <ExerciseItem
        exercise={{ name: "some name" }}
        handleOnPress={() => {}}
        showDivider={false}
      />
    );

    const exercise = getByTestId("exercise-item");
    expect(exercise).toBeTruthy();
  });

  it("displays the exercise name on the screen", () => {
    const { getByText } = render(
      <ExerciseItem
        exercise={{ name : "bench"}}
        showDivider={false}
        handleOnPress={() => {}}
      />
    );

    const exercise = getByText("bench");
    expect(exercise).toBeTruthy();
  });

  it("calls the function passed as a prop when press", () => {
    const mockedOnPress = jest.fn();

    const { getByTestId } = render(
      <ExerciseItem
        exercise={{ name : "bench"}}
        showDivider={false}
        handleOnPress={mockedOnPress}
      />
    );

    fireEvent.press(getByTestId("exercise-item"));
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it("renders a divider when prop passed is true", () => {
    const { getByTestId } = render(
      <ExerciseItem
        exercise={{ name: "some name" }}
        handleOnPress={() => {}}
        showDivider={false}
      />
    );

    const divider = getByTestId("exercise-item-divider");
    expect(divider).toBeTruthy();
  });
});