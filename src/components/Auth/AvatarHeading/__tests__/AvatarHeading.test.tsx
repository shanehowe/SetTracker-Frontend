import { render } from "@testing-library/react-native";
import { AvatarHeading } from "../AvatarHeading";

describe("AvatarHeading", () => {
  it("renders", () => {
    const { getByTestId } = render(<AvatarHeading title="Hello" icon="lock" />);

    const titleComponent = getByTestId("title");
    expect(titleComponent).toBeTruthy();
  });

  it("displays the appropriate text passed as a prop", () => {
    const { getByText } = render(<AvatarHeading title="Hello" icon="lock" />);
    const titleText = getByText("Hello");
    expect(titleText).toBeDefined();
  });

  it("renders an avatar icon based on the prop provided", () => {
    const { getByTestId } = render(<AvatarHeading title="Hello" icon="lock" />);

    const avatar = getByTestId("avatar-icon");
    expect(avatar).toBeTruthy();
  });
});
