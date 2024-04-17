import setService from "../../services/sets";
import { useSetHistory } from "../useSetHistory";
import { renderHook } from "@testing-library/react-native";
import { AllTheProviders } from "../../test-utils";

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
});
