import { renderHook, waitFor } from "@testing-library/react-native";
import { useExercises } from "../useExercises";
import { queryClientWrapper, mockedQueryClient } from "../../test-utils";
import exerciseService from "../../services/exercises";

const testExerciseList = [
  { name: 'legs' },
  { name: 'back' },
  { name: 'back1' },
  { name: 'shoulder press' },
];

jest.spyOn(exerciseService, 'getAll').mockImplementation(() => {
  return testExerciseList;
});

afterEach(() => mockedQueryClient.clear());

describe("useExercises", () => {
  it("returns the full list when filter is empty", async () => {
    const { result } = renderHook(
      useExercises,
      { wrapper: queryClientWrapper, initialProps: "" }
    );

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.exercises).toEqual(testExerciseList);
  });

  it("returns a filtered list when given a non empty filter", async () => {
    const { result } = renderHook(
      useExercises,
      { wrapper: queryClientWrapper, initialProps: "back" }
    );

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.exercises).toEqual([
      { name: "back" },
      { name: "back1" }
    ]);
  });

  it("filter is not case sensitive", async () => {
    const { result } = renderHook(
      useExercises,
      { wrapper: queryClientWrapper, initialProps: "bAcK" }
    );

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.exercises).toEqual([
      { name: "back" },
      { name: "back1" }
    ]);
  });

  it("returns an empty array when filter does not match anything", async () => {
    const { result } = renderHook(
      useExercises,
      { wrapper: queryClientWrapper, initialProps: "this is definitely not in the list" }
    );

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.exercises).toHaveLength(0);
  });

  it("can handle errors and returns an error message", async () => {
    const mockError = new Error("error");
    jest.spyOn(exerciseService, 'getAll').mockImplementationOnce(() => {
      return Promise.reject(mockError) as any;
    });

    const { result } = renderHook(
      useExercises,
      { wrapper: queryClientWrapper, initialProps: "" }
    );

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.error).toEqual(mockError);
    expect(result.current.error?.message).toEqual("error");
  });

  it("returns an empty array when an error is thrown", async () => {
    const mockError = new Error("error");
    jest.spyOn(exerciseService, 'getAll').mockImplementationOnce(() => {
      return Promise.reject(mockError) as any;
    });

    const { result } = renderHook(useExercises, {
      wrapper: queryClientWrapper,
      initialProps: ""
    });

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.exercises).toBeInstanceOf(Array);
    expect(result.current.exercises).toHaveLength(0);
  });
});