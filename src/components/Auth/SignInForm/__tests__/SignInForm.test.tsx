import { render, fireEvent } from "@testing-library/react-native";
import { SignInForm } from "../SignInForm";
import { Alert } from 'react-native';

const mockSignIn = jest.fn();
jest.mock("../../../../contexts/AuthContext", () => ({
  useAuth: () => ({
    signIn: mockSignIn
  })
}));

describe("SignInForm", () => {
  it("renders all children", () => {
    const { getByTestId } = render(<SignInForm />);

    const emailInput = getByTestId("email-input");
    const loginButton = getByTestId("login-button");
    const passwordInput = getByTestId("password-input");
    const forgotPasswordButton = getByTestId("forgot-password-button");

    expect(emailInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
    expect(forgotPasswordButton).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it("calls signIn when data is present in text inputs", () => {
    const { getByTestId } = render(<SignInForm />);

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByTestId("login-button");

    fireEvent.changeText(emailInput, "test@email.com");
    fireEvent.changeText(passwordInput, "bad-password");
    fireEvent.press(loginButton);

    expect(mockSignIn).toHaveBeenCalled();
    expect(mockSignIn).toHaveBeenCalledWith("test@email.com", "bad-password");
  });

  it("shows an Alert when password is blank", () => {
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    const { getByTestId } = render(<SignInForm />);

    const loginButton = getByTestId("login-button");
    const emailInput = getByTestId("email-input");

    fireEvent.changeText(emailInput, "email@email.com");
    fireEvent.press(loginButton);
    expect(alertSpy).toHaveBeenCalled();
    alertSpy.mockRestore();
  });

  it("shows an Alert when email is blank", () => {
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    const { getByTestId } = render(<SignInForm />);

    const loginButton = getByTestId("login-button");
    const passwordInput = getByTestId("password-input");

    fireEvent.changeText(passwordInput, "testing");
    fireEvent.press(loginButton);
    expect(alertSpy).toHaveBeenCalled();
    alertSpy.mockRestore();
  });
})