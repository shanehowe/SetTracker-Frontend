import { render } from "@testing-library/react-native";
import { AllExerciseList } from "../AllExercisesList";
import { mockedQueryClient } from "../../../../test-utils";
import { queryClientWrapper } from "../../../../test-utils";
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
        { name: "exercise1" },
        { name: "exercise2" },
      ]
    }));
  
    const { getByTestId } = render(
      <AllExerciseList searchFilter="" showModal={() => {}}/>,
      { wrapper: queryClientWrapper }
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
        { name: "exercise1" },
        { name: "exercise2" },
      ]
    }));
  
    const { getByTestId } = render(
      <AllExerciseList searchFilter="" showModal={() => {}}/>,
      { wrapper: queryClientWrapper }
    );

    const exerciseList = getByTestId("all-exercises-list");
    expect(exerciseList).toBeTruthy();
  });

  it("renders loading state when data is loading", () => {
    (useExercises as jest.Mock).mockImplementation(() => ({
      isLoading: true,
      isError: false,
      error: null,
      exercises: [
        { name: "exercise1" },
        { name: "exercise2" },
      ]
    }));
  
    const { getByText} = render(
      <AllExerciseList searchFilter="" showModal={() => {}}/>,
      { wrapper: queryClientWrapper }
    );

    expect(getByText("Loading...")).toBeTruthy();
  })
});