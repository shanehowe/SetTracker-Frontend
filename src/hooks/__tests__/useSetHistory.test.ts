import setService from "../../services/sets";
import { useSetHistory } from "../useSetHistory";
import { renderHook, waitFor } from "@testing-library/react-native";
import { AllTheProviders } from "../../test-utils";
import { SetHistory } from "../../types";

describe("useSetHistory", () => {
  it("Calls setService.getSetHistory with the correct exerciseId", () => {
    const exerciseId = "1";

    const getSetHistory = jest.fn().mockReturnValue(Promise.resolve([]));
    jest.spyOn(setService, "getSetHistory").mockImplementation(getSetHistory);

    const { unmount } = renderHook(() => useSetHistory(exerciseId), {
      wrapper: AllTheProviders,
    });
    expect(getSetHistory).toHaveBeenCalledWith(exerciseId);
    unmount();
  });

  it("Returns the data from setService.getSetHistory", async () => {
    const exerciseId = "1";
    const data: SetHistory[] = [];
    jest.spyOn(setService, "getSetHistory").mockReturnValue(Promise.resolve(data));

    const { result, unmount } = renderHook(() => useSetHistory(exerciseId), {
      wrapper: AllTheProviders,
    });

    await waitFor(() => expect(result.current.data).toEqual(data));
    unmount();
  });

  it("Returns laoding, error, and isError state", async () => {
    const exerciseId = "1";
    const error = new Error("error");
    jest.spyOn(setService, "getSetHistory").mockReturnValue(Promise.reject(error));

    const { result, unmount } = renderHook(() => useSetHistory(exerciseId), {
      wrapper: AllTheProviders,
    });

    expect(result.current.isLoading).toBeDefined();
    expect(result.current.isError).toBeDefined();
    expect(result.current.error).toBeDefined();
    unmount();
  });
});
