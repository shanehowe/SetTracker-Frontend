import { AuthButtons } from "../AuthButtons";
import { render } from "@testing-library/react-native";


describe("AuthButtons", () => {
  it("renders a continue with google button", () => {
    const { getByTestId } = render(<AuthButtons />);

    const googleButton = getByTestId("google-auth-button");
    expect(googleButton).toBeTruthy();
  });

  it("renders a continue with facebook button", () => {
    const { getByTestId } = render(<AuthButtons />);

    const facebookButton = getByTestId("facebook-auth-button");
    expect(facebookButton).toBeTruthy();
  });
});