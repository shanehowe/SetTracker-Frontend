import { AllTheProviders } from "../../test-utils";
import { useDeleteSetMutation } from "../useDeleteSetMutation";
import { renderHook, waitFor } from "@testing-library/react-native";
import setService from "../../services/sets";
import { act } from "react-test-renderer";

describe("useDeleteSetMutation", () => {
  it("Returns an object with a mutate funciton", () => {
    const { result, unmount } = renderHook(
      () => {
        return useDeleteSetMutation(
          () => {},
          () => {}
        );
      },
      { wrapper: AllTheProviders }
    );

    expect(result.current.mutate).toBeInstanceOf(Function);
    unmount();
  });

  it("Calls remove method in set service module", async () => {
    const removeMock = jest.fn();
    jest
      .spyOn(setService, "remove")
      .mockImplementation(removeMock);

    const { result, unmount } = renderHook(
      () => useDeleteSetMutation(() => {}, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(() => result.current.mutateAsync("1"))
    await waitFor(() => expect(removeMock).toHaveBeenCalled());
    unmount();
  });

  it("calls the onSuccess call back when mutation is successful", async () => {
    jest
      .spyOn(setService, "remove")
      .mockImplementation(() => Promise.resolve());
    const onSuccess = jest.fn();

    const { result, unmount } = renderHook(
      () => useDeleteSetMutation(onSuccess, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(() => result.current.mutateAsync("1"));
    await waitFor(() => expect(onSuccess).toHaveBeenCalled());
    unmount();
  });

  it("calls the onError call back when mutation fails", async () => {
    jest.spyOn(setService, "remove").mockRejectedValue(new Error());
    const onError = jest.fn();

    const { result, unmount } = renderHook(
      () => useDeleteSetMutation(() => {}, onError),
      { wrapper: AllTheProviders }
    );

    await act(() => result.current.mutateAsync("1").catch(() => {}));
    await waitFor(() => expect(onError).toHaveBeenCalled());
    unmount();
  });
});
