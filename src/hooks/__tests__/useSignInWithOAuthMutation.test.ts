import { renderHook, waitFor } from "@testing-library/react-native";
import authService from "../../services/auth";
import { useSignInWithOAuthMutation } from "../useSignInWithOAuthMutation";
import { AllTheProviders } from "../../test-utils";
import { act } from "react-test-renderer";

const signInOAuthMock = jest.spyOn(authService, "signInOAuth").mockImplementation(() => Promise.resolve({}) as any);

describe("useSignInWithOAuthMutation", () => {
  const provider = "google";
  const token = "token";
  it("should call authService.signInOAuth with the correct arguments", async () => {
    // Arrange

    const { result, unmount } = renderHook(
      () => useSignInWithOAuthMutation(jest.fn(), jest.fn()), 
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      result.current.mutateAsync({ provider, token })
    });

    await waitFor(() => expect(signInOAuthMock).toHaveBeenCalledWith(provider, token));
    unmount();
  });

  it("should call onSuccessCallback when the mutation is successful", async () => {
    const user = { id: "1", email: "something@email.com", token: "some_returned_token" };
    const onSuccessCallback = jest.fn();
    const onErrorCallback = jest.fn();

    signInOAuthMock.mockResolvedValueOnce(user);

    const { result, unmount } = renderHook(
      () => useSignInWithOAuthMutation(onSuccessCallback, onErrorCallback), 
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync({ provider, token });
    });

    await waitFor(() => expect(onSuccessCallback).toHaveBeenCalledWith(user));
    unmount();
  });

  it("should call onErrorCallback when the mutation fails", async () => {
    const error = new Error("An error occurred");
    const onSuccessCallback = jest.fn();
    const onErrorCallback = jest.fn();

    signInOAuthMock.mockRejectedValueOnce(error);

    const { result, unmount } = renderHook(
      () => useSignInWithOAuthMutation(onSuccessCallback, onErrorCallback), 
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync({ provider, token }).catch(() => {});
    });

    await waitFor(() => expect(onErrorCallback).toHaveBeenCalledWith(error));
    unmount();
  });
});