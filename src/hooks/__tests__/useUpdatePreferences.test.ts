import { renderHook, waitFor } from "@testing-library/react-native";
import { useUpdatePreferences } from "../useUpdatePreferencesMutation";
import { AllTheProviders } from "../../test-utils";
import userService from "../../services/users";
import { act } from "react-test-renderer";

const onSuccessMockFn = jest.fn();
const onErrorMockFn = jest.fn();

describe("useUpdatePreferences", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Should return a object with a mutate function", () => {
    const { result, unmount } = renderHook(
      () => useUpdatePreferences(onSuccessMockFn, onErrorMockFn),
      { wrapper: AllTheProviders }
    );
    expect(result.current.mutate).toBeInstanceOf(Function);
    unmount();
  });

  it("Should call updatePreferences method in userService when mutation called", async () => {
    const mockUpdatePreferences = jest.fn();
    jest
      .spyOn(userService, "updatePreferences")
      .mockImplementationOnce(mockUpdatePreferences);

    const { result, unmount } = renderHook(
      () => useUpdatePreferences(onSuccessMockFn, onErrorMockFn),
      { wrapper: AllTheProviders }
    );

    await act(async () => await result.current.mutateAsync({ theme: "dark" }));

    await waitFor(() =>
      expect(mockUpdatePreferences).toHaveBeenCalledWith({ theme: "dark" })
    );
    unmount();
  });

  it("Should call the onSuccessCallback function passed in when mutation is successful", async () => {
    jest
      .spyOn(userService, "updatePreferences")
      .mockImplementationOnce(jest.fn());

    const { result, unmount } = renderHook(
      () => useUpdatePreferences(onSuccessMockFn, onErrorMockFn),
      { wrapper: AllTheProviders }
    );

    await act(async () => await result.current.mutateAsync({ theme: "dark" }));

    await waitFor(() =>
      expect(onSuccessMockFn).toHaveBeenCalledTimes(1)
    );
    unmount();
  });

  it("Should call the onErrorCallback function passed in when mutation fails", async () => {
    jest
      .spyOn(userService, "updatePreferences")
      .mockRejectedValue(new Error());

    const { result, unmount } = renderHook(
      () => useUpdatePreferences(onSuccessMockFn, onErrorMockFn),
      { wrapper: AllTheProviders }
    );

    await act(async () => await result.current.mutateAsync({ theme: "dark" }).catch(() => {}));

    await waitFor(() =>
      expect(onErrorMockFn).toHaveBeenCalledTimes(1)
    );
    unmount();
  });
});
