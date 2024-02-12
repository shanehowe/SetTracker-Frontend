import { renderHook, waitFor } from "@testing-library/react-native";
import { useFolder } from "../useFolder";
import workoutFolderService from "../../services/workoutFolders";
import { AllTheProviders } from "../../test-utils";

const folder = {
  id: "1",
  name: "Chest Day",
  exercises: [
    { id: "1", name: "Bent Over Row" },
    { id: "2", name: "Pull Ups" },
    { id: "3", name: "Bicep Curls" },
  ],
};

jest.spyOn(workoutFolderService, "getById").mockImplementation(() => {
  return folder;
});

describe("useFolder", () => {
  it("returns the folder when given an id", async () => {
    const { result, unmount } = renderHook(() => useFolder("1"), {
      wrapper: AllTheProviders,
    });

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    expect(result.current.folder).toEqual(folder);

    unmount();
  });

  it("returns an error when folder is not found", async () => {
    jest.spyOn(workoutFolderService, "getById").mockImplementation(() => {
      throw new Error("Folder not found");
    });

    const { result, unmount } = renderHook(() => useFolder("2"), {
      wrapper: AllTheProviders,
    });

    await waitFor(() => expect(result.current.isError).toBeTruthy());
    expect(result.current.error).toEqual(new Error("Folder not found"));

    unmount();
  });
});