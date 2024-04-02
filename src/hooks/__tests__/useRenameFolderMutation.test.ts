import { waitFor, renderHook, act } from "@testing-library/react-native";
import { AllTheProviders } from "../../test-utils";
import { useRenameFolderMutation } from "../useRenameFolderMutation";
import workoutFolderService from "../../services/workoutFolders";

jest.spyOn(workoutFolderService, "getById").mockReturnValue({
  id: "1",
  name: "Folder 1",
  workouts: [],
} as never);

jest.spyOn(workoutFolderService, "updateFolder").mockReturnValue({
  id: "1",
  name: "Folder 1",
  workouts: [],
} as never);

describe("useRenameFolderMutation", () => {
  it("should return an object with a mutate method", () => {
    const { result, unmount } = renderHook(
      () => useRenameFolderMutation("1", () => {}, () => {}),
      { wrapper: AllTheProviders }
    );
    expect(result.current.mutate).toBeInstanceOf(Function);
    unmount();
  });

  it("should call the onSuccess function when the mutation is successful", async () => {
    const onSuccess = jest.fn();
    const { result, unmount } = renderHook(
      () => useRenameFolderMutation("1", onSuccess, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync("New Name");
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
      () => useRenameFolderMutation("1", () => {}, onError),
      { wrapper: AllTheProviders }
    );

    jest.spyOn(workoutFolderService, "updateFolder").mockImplementationOnce(() => {
      throw new Error("Failed to rename folder") as never;
    });

    await act(async () => {
      // catch the error so test can continue
      await result.current.mutateAsync("new name").catch(() => {});
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
