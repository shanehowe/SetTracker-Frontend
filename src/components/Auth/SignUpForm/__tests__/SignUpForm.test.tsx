import { act, fireEvent, render } from "@testing-library/react-native";
import { SignUpForm } from "../SignUpForm";
import { AllTheProviders } from "../../../../test-utils";

const mockMutate = jest.fn();
jest.mock("../../../../hooks/useSignUpWithEmailPasswordMutation", () => ({
  useSignUpWithEmailPasswordMutation: () => ({
    mutate: mockMutate,
  }),
}));

describe("SignUpForm", () => {
  beforeEach(() => {
    mockMutate.mockClear();
  });

  it("should render correctly", () => {
    const { getByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    expect(getByTestId("email-input")).toBeDefined();
    expect(getByTestId("password-input")).toBeDefined();
    expect(getByTestId("confirm-password-input")).toBeDefined();
    expect(getByTestId("signup-button")).toBeDefined();
  });

  it("should call signUpEmailPasswordMutation.mutate on signup button press", async () => {
    const { getByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const confirmPasswordInput = getByTestId("confirm-password-input");
    const signUpButton = getByTestId("signup-button");

    await act(async () => {
      fireEvent.changeText(emailInput, "something@something.com");
      fireEvent.changeText(passwordInput, "password");
      fireEvent.changeText(confirmPasswordInput, "password");
    });

    await act(async () => {
      fireEvent.press(signUpButton);
    });

    expect(mockMutate).toHaveBeenCalledWith({
      email: "something@something.com",
      password: "password",
    });
  });

  it("should not call the mutation if email is empty", async () => {
    const { getByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    const passwordInput = getByTestId("password-input");
    const confirmPasswordInput = getByTestId("confirm-password-input");
    const signUpButton = getByTestId("signup-button");

    await act(async () => {
      fireEvent.changeText(passwordInput, "password");
      fireEvent.changeText(confirmPasswordInput, "password");
    });

    await act(async () => {
      fireEvent.press(signUpButton);
    });

    expect(mockMutate).not.toHaveBeenCalled();
  });

  it("should not call the mutation if password is empty", async () => {
    const { getByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    const emailInput = getByTestId("email-input");
    const confirmPasswordInput = getByTestId("confirm-password-input");
    const signUpButton = getByTestId("signup-button");

    await act(async () => {
      fireEvent.changeText(emailInput, "something@something.com");
      fireEvent.changeText(confirmPasswordInput, "password");
    });

    await act(async () => {
      fireEvent.press(signUpButton);
    });

    expect(mockMutate).not.toHaveBeenCalled();
  });

  it("should not call the mutation if confirm password is empty", async () => {
    const { getByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const signUpButton = getByTestId("signup-button");

    await act(async () => {
      fireEvent.changeText(emailInput, "something");
      fireEvent.changeText(passwordInput, "password");
    });

    await act(async () => {
      fireEvent.press(signUpButton);
    });

    expect(mockMutate).not.toHaveBeenCalled();
  });

  it("should not call the mutation if password and confirm password do not match", async () => {
    const { getByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const confirmPasswordInput = getByTestId("confirm-password-input");
    const signUpButton = getByTestId("signup-button");

    await act(async () => {
      fireEvent.changeText(emailInput, "something");
      fireEvent.changeText(passwordInput, "password");
      fireEvent.changeText(confirmPasswordInput, "password1");
    });

    await act(async () => {
      fireEvent.press(signUpButton);
    });

    expect(mockMutate).not.toHaveBeenCalled();
  });
});