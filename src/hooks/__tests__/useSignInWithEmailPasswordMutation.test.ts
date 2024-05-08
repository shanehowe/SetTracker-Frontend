import { renderHook, waitFor } from "@testing-library/react-native";
import { act } from "react-test-renderer";
import { AllTheProviders } from "../../test-utils";
import { useSignInWithEmailPasswordMutation } from "../useSignInWithEmailPasswordMutation";
import authService from "../../services/auth";

jest.spyOn(authService, "signInEmailPassword").mockReturnValue({} as never);

describe("useSignInWithEmailPasswordMutation", () => {
  const email = "something@email.com";
  const password = "password";
  it("Should call authService.signInEmailPassword with the correct arguments", async () => {
    const { result, unmount } = renderHook(
      () => useSignInWithEmailPasswordMutation(() => {}, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync({ email, password });
    });

    await waitFor(() => {
      expect(authService.signInEmailPassword).toHaveBeenCalledWith(email, password);
    });

    unmount();
  });
  it("should call the onSuccess function when the mutation is successful", async () => {
    const onSuccess = jest.fn();
    const { result, unmount } = renderHook(
      () => useSignInWithEmailPasswordMutation(onSuccess, () => {}),
      { wrapper: AllTheProviders }
    );

    await act(async () => {
      await result.current.mutateAsync({
        email: "something@email.com",
        password: "password",
      })
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
      () => useSignInWithEmailPasswordMutation(() => {}, onError),
      { wrapper: AllTheProviders }
    );

    jest.spyOn(authService, "signInEmailPassword").mockImplementationOnce(() => {
      throw new Error("Failed to sign in") as never;
    });

    await act(async () => {
      await result.current.mutateAsync({
        email: "something@email.com",
        password: "password",
      }).catch(() => {});
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