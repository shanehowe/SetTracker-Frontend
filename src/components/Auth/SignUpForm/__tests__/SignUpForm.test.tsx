import { render } from "@testing-library/react-native";
import { SignUpForm } from "../SignUpForm";
import { AllTheProviders } from "../../../../test-utils";

describe("SignUpForm", () => {
  it("should render correctly", () => {
    const { getByTestId, getAllByTestId } = render(<SignUpForm />, { wrapper: AllTheProviders });

    expect(getByTestId("email-input")).toBeDefined();
    expect(getAllByTestId("password-input")).toHaveLength(2);
    expect(getByTestId("signup-button")).toBeDefined();
  });

  it("should render the correct heading text", () => {
    const { getByText } = render(<SignUpForm />, { wrapper: AllTheProviders });

    expect(getByText("Create an account")).toBeOnTheScreen();
  });

  it("should render the correct button text", () => {
    const { getByText } = render(<SignUpForm />, { wrapper: AllTheProviders });

    expect(getByText("Sign Up")).toBeOnTheScreen();
  });
});