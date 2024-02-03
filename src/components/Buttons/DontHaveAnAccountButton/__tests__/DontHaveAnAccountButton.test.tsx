import { render } from "@testing-library/react-native";
import { DontHaveAnAccountButton } from "../DontHaveAnAccountButton";
import { NavigationContainer } from "@react-navigation/native";

describe("DontHaveAnAccountButton", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <DontHaveAnAccountButton />
      </NavigationContainer>
    );
    
    const button = getByTestId("dont-have-account-button");
    expect(button).toBeTruthy();
  });
});