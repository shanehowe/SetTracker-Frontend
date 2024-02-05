import { render } from "@testing-library/react-native";
import { AllExerciseList } from "../AllExercisesList";

describe("AllExerciseList", () => {
  it("renders the container", () => {
    const { getByTestId } = render(<AllExerciseList />)

    const exerciseCardContainer = getByTestId("all-exercises-card");
    expect(exerciseCardContainer).toBeTruthy();
  });

  it("renders the list of exercises", () => {
    const { getByTestId } = render(<AllExerciseList />)

    const exerciseList = getByTestId("all-exercises-list");
    expect(exerciseList).toBeTruthy();
  });
});