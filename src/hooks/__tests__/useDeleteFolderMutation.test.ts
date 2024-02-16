import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useDeleteFolderMutation } from "../useDeleteFolderMutation";
import { AllTheProviders, mockedQueryClient } from "../../test-utils";
import workoutFolderService from "../../services/workoutFolders";

mockedQueryClient.setQueryData(["workoutFolders"], [{ id: "1" }]);

afterEach(() => {
  mockedQueryClient.clear();
});

describe("useDeleteFolderMutation", () => {
  it("returns an object with a mutate function", () => {
    const { result } = renderHook(
      () => useDeleteFolderMutation("1", () => {}, () => {}),
      { wrapper: AllTheProviders }
    );
    expect(result.current.mutate).toBeInstanceOf(Function);
  });

  it("calls the onSuccess callback when the mutation is successful", async () => {
    const onSuccess = jest.fn();
    const { result, unmount } = renderHook(
      () => useDeleteFolderMutation("1", onSuccess, () => {}),
      { wrapper: AllTheProviders }
    );
    await act(async () => {
      await result.current.mutateAsync();
    });
    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
    unmount();
  });

  it("calls the onError callback when the mutation fails", async () => {
    const onError = jest.fn();
    jest.spyOn(workoutFolderService, "remove").mockRejectedValue(new Error("Error") as never);

    const { result, unmount } = renderHook(
      () => useDeleteFolderMutation("1", () => {}, onError),
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync().catch(() => {});
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
    unmount();
  });
});