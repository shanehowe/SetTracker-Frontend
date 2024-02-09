import { renderHook, act, waitFor } from "@testing-library/react-native";
import { AllTheProviders, mockedQueryClient } from "../../test-utils";
import { useAddCustomExerciseMutation } from "../useAddCustomExerciseMutation";
import exerciseService from "../../services/exercises";

afterEach(() => {
  jest.clearAllMocks();
  mockedQueryClient.clear();
});

describe("useAddCustomExerciseMutation", () => {
  it("should return an object with a mutate method", () => {
    const { result } = renderHook(
      () =>
        useAddCustomExerciseMutation(
          () => {},
          () => {}
        ),
      { wrapper: AllTheProviders }
    );
    expect(result.current.mutate).toBeInstanceOf(Function);
  });

  it("should call the onSuccess function when the mutation is successful", async () => {
    const onSuccess = jest.fn();
    const { result, unmount } = renderHook(
      () => useAddCustomExerciseMutation(onSuccess, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync("New Exercise");
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
      expect(result.current.data).toBeDefined();
    });
    unmount();
  });

  it("should call the onError function when the mutation fails", async () => {
    const onError = jest.fn();
    const { result, unmount } = renderHook(
      () => useAddCustomExerciseMutation(() => {}, onError),
      { wrapper: AllTheProviders }
    );

    jest.spyOn(exerciseService, "createCustom").mockImplementationOnce(() => {
      throw new Error("Failed to create exercise") as never;
    });

    await act(async () => {
      // catch the error so test can continue
      await result.current.mutateAsync("New Exercise").catch(() => {});
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
      expect(result.current.error).toBeDefined();
    });
    unmount();
  });
});
