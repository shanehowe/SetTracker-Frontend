import { fireEvent, render } from "@testing-library/react-native";
import { SignInForm } from "../SignInForm";
import { AllTheProviders } from "../../../../test-utils";
import { act } from "react-test-renderer";

const mockMutate = jest.fn();
jest.mock("../../../../hooks/useSignInWithEmailPasswordMutation", () => ({
  useSignInWithEmailPasswordMutation: () => ({
    mutate: mockMutate,
  }),
}));

describe("SignInForm", () => {
  beforeEach(() => {
    mockMutate.mockClear();
  });

  it("renders all children", () => {
    const { getByTestId } = render(<SignInForm />, {
      wrapper: AllTheProviders,
    });

    const emailInput = getByTestId("email-input");
    const loginButton = getByTestId("login-button");
    const passwordInput = getByTestId("password-input");

    expect(emailInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it("calls signInEmailPasswordMutation.mutate on login button press", async () => {
    const { getByTestId } = render(<SignInForm />, {
      wrapper: AllTheProviders,
    });

    const emailInput = getByTestId("email-input");
    const loginButton = getByTestId("login-button");
    const passwordInput = getByTestId("password-input");

    await act(async () => {
      fireEvent.changeText(emailInput, "something@someone.com");
      fireEvent.changeText(passwordInput, "password");
    });

    await act(async () => {
      fireEvent.press(loginButton);
    });

    expect(mockMutate).toHaveBeenCalledWith({
      email: "something@someone.com",
      password: "password",
    });
  });

  it("does not call the mutation email is empty", async () => {
    const { getByTestId } = render(<SignInForm />, {
      wrapper: AllTheProviders,
    });

    const loginButton = getByTestId("login-button");
    const passwordInput = getByTestId("password-input");

    await act(async () => {
      fireEvent.changeText(passwordInput, "password");
    });

    await act(async () => {
      fireEvent.press(loginButton);
    });

    expect(mockMutate).not.toHaveBeenCalled();
  });
});
