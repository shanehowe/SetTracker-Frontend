import { render } from "@testing-library/react-native";
import { EmptyExerciseList } from "../EmptyExerciseList";

describe("EmptyExerciseList", () => {
  it("renders the container", () => {
    const { getByTestId } = render(<EmptyExerciseList showModal={() => {}} />);
    const container = getByTestId("empty-exercise-list-container");
    expect(container).toBeTruthy();
  });

  it("renders the text", () => {
    const { getByTestId } = render(<EmptyExerciseList showModal={() => {}} />);
    const text = getByTestId("cant-find-exericse-text");
    expect(text).toBeTruthy();
  });

  it("renders the button", () => {
    const { getByTestId } = render(<EmptyExerciseList showModal={() => {}} />);
    const button = getByTestId("add-user-exercise-button");
    expect(button).toBeTruthy();
  });
});
