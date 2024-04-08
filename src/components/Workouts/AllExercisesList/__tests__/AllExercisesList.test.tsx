import { render } from "@testing-library/react-native";
import { AllExerciseList } from "../AllExercisesList";
import { mockedQueryClient } from "../../../../test-utils";
import { AllTheProviders } from "../../../../test-utils";
import { useExercises } from '../../../../hooks/useExercises';

jest.mock('../../../../hooks/useExercises');

afterEach(() => mockedQueryClient.clear());

describe("AllExerciseList", () => {
  it("renders the container", async () => {
    (useExercises as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      isError: false,
      error: null,
      exercises: [
        { id: "1", name: "exercise1" },
        { id: "2", name: "exercise2" },
      ]
    }));
  
    const { getByTestId } = render(
      <AllExerciseList searchFilter="" showModal={() => {}}/>,
      { wrapper: AllTheProviders }
    );
    
    const exerciseCardContainer = getByTestId("all-exercises-card");
    expect(exerciseCardContainer).toBeTruthy();
  });

  it("renders the list of exercises", () => {
    (useExercises as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      isError: false,
      error: null,
      exercises: [
        { id: "1", name: "exercise1" },
        { id: "2", name: "exercise2" },
      ]
    }));
  
    const { getByTestId } = render(
      <AllExerciseList searchFilter="" showModal={() => {}}/>,
      { wrapper: AllTheProviders }
    );

    const exerciseList = getByTestId("exercise-list");
    expect(exerciseList).toBeTruthy();
  });

  it("renders loading state when data is loading", () => {
    (useExercises as jest.Mock).mockImplementation(() => ({
      isLoading: true,
      isError: false,
      error: null,
      exercises: [
        { id: "1", name: "exercise1" },
        { id: "2", name: "exercise2" },
      ]
    }));
  
    const { getByTestId } = render(
      <AllExerciseList searchFilter="" showModal={() => {}}/>,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("loading-comp")).toBeTruthy();
  })
});