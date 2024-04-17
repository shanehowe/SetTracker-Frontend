import setService from "../../services/sets";
import { renderHook, waitFor } from "@testing-library/react-native";
import { useAddSetMutation } from "../useAddSetMutation";
import { AllTheProviders } from "../../test-utils";
import { act } from "react-test-renderer";

describe("useAddSetMutation", () => {
  it("Calls createSet method", async () => {
    const createSet = jest.fn().mockImplementation(() => Promise.resolve({}));
    jest.spyOn(setService, "createSet").mockImplementation(createSet);

    const { result, unmount } = renderHook(
      () =>
        useAddSetMutation(
          () => {},
          () => {}
        ),
      { wrapper: AllTheProviders }
    );

    result.current.mutateAsync({
      exerciseId: "1",
      weight: 1,
      reps: 1,
    });

    await waitFor<void>(() => expect(createSet).toHaveBeenCalledTimes(1));
    await waitFor<void>(() =>
      expect(createSet).toHaveBeenCalledWith("1", 1, 1)
    );
    unmount();
  });

  it("Calls the onSuccess callback when successful", async () => {
    const onSuccess = jest.fn();
    jest.spyOn(setService, "createSet").mockImplementation(
      () =>
        Promise.resolve({
          exerciseId: "1",
          weight: 1,
          reps: 1,
        }) as never
    );

    const { result, unmount } = renderHook(
      () => useAddSetMutation(onSuccess, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(
      () =>
        result.current.mutateAsync({
          exerciseId: "1",
          weight: 1,
          reps: 1,
        }) as never
    );

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
    unmount();
  });

  it("Calls the onError callback when not successful", async () => {
    const onError = jest.fn();
    jest.spyOn(setService, "createSet").mockImplementation(
      () => {throw new Error()}
    );

    const { result, unmount } = renderHook(
      () => useAddSetMutation(() => {}, onError),
      { wrapper: AllTheProviders }
    );

    await act(
      () =>
        result.current.mutateAsync({
          exerciseId: "1",
          weight: 1,
          reps: 1,
        }).catch(() => {}) as never
    );

    await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));
    unmount();
  });
});
