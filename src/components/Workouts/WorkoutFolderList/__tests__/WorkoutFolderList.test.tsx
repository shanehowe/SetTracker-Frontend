import { render } from "@testing-library/react-native";
import { WorkoutFolderList } from "../WorkoutFolderList";
import { useQuery } from "@tanstack/react-query";
import { AllTheProviders } from "../../../../test-utils";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

describe("WorkoutFolderList", () => {
  it("should render loading text when loading", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const { getByText } = render(
    <WorkoutFolderList />,
    { wrapper: AllTheProviders }
    );

    expect(getByText("Loading...")).toBeTruthy();
  });

  it("should render error message when error", () => {
    (useQuery as jest.Mock).mockReturnValue({
      error: { message: "Error" },
    });

    const { getByText } = render(
      <WorkoutFolderList />,
      { wrapper: AllTheProviders }
    );

    expect(getByText("Error")).toBeTruthy();
  });

  it("should render no workout folders message when no workout folders", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
    });

    const { getByText } = render(
      <WorkoutFolderList />,
      { wrapper: AllTheProviders }
    );

    expect(
      getByText("No workout folders. Click the button below to create one!")
    ).toBeTruthy();
  });

  it("should render workout folders", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [
        {
          id: "1",
          name: "Folder 1",
          exercises: [],
        },
        {
          id: "2",
          name: "Folder 2",
          exercises: [],
        },
      ],
    });

    const { getByTestId } = render(
      <WorkoutFolderList />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("workout-folders-list")).toBeTruthy();
  });
});
