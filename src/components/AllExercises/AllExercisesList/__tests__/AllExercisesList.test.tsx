import { render } from "@testing-library/react-native";
import { AllExerciseList } from "../AllExercisesList";
import { mockedQueryClient } from "../../../../test-utils";
import { queryClientWrapper } from "../../../../test-utils";

jest.mock("../../../../hooks/useExercises", () => ({
  useExercises: () => ({
    isLoading: false,
    isError: false,
    error: null,
    exercises: [
      { name: "exercise1" },
      { name: "exercise2" },
    ]
  })
}));

afterEach(() => mockedQueryClient.clear());

describe("AllExerciseList", () => {
  it("renders the container", async () => {
    const { getByTestId } = render(
      <AllExerciseList />,
      { wrapper: queryClientWrapper }
    );
    
    const exerciseCardContainer = getByTestId("all-exercises-card");
    expect(exerciseCardContainer).toBeTruthy();
  });

  it("renders the list of exercises", () => {
    const { getByTestId } = render(
      <AllExerciseList />,
      { wrapper: queryClientWrapper }
    );

    const exerciseList = getByTestId("all-exercises-list");
    expect(exerciseList).toBeTruthy();
  });
});