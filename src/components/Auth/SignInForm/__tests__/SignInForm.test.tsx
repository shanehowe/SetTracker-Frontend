import { render, fireEvent } from "@testing-library/react-native";
import { SignInForm } from "../SignInForm";
import { AllTheProviders } from "../../../../test-utils";

describe("SignInForm", () => {
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

  it("shows banner text when password is blank", () => {
    const { getByTestId, getByText } = render(<SignInForm />, {
      wrapper: AllTheProviders,
    });

    const loginButton = getByTestId("login-button");
    const emailInput = getByTestId("email-input");

    fireEvent.changeText(emailInput, "email@email.com");
    fireEvent.press(loginButton);

    expect(getByText("Please fill in all fields to continue.")).toBeTruthy();
  });

  it("shows banner text when email is blank", () => {
    const { getByTestId, getByText } = render(<SignInForm />, {
      wrapper: AllTheProviders,
    });

    const loginButton = getByTestId("login-button");
    const passwordInput = getByTestId("password-input");

    fireEvent.changeText(passwordInput, "testing");
    fireEvent.press(loginButton);

    expect(getByText("Please fill in all fields to continue.")).toBeTruthy();
  });
});
