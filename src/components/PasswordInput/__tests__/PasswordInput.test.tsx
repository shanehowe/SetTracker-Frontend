import { fireEvent, render } from "@testing-library/react-native";
import { PasswordInput } from "../PasswordInput";

describe("PasswordInput", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <PasswordInput label="Password" onChangeText={() => {}} mode="flat" />
    );
    expect(getByTestId("password-input")).toBeDefined();
  });

  it("renders correctly with custom style", () => {
    const { getByTestId } = render(
      <PasswordInput
        label="Password"
        onChangeText={() => {}}
        mode="flat"
        style={{ width: 200 }}
      />
    );
    expect(getByTestId("password-input")).toBeDefined();
  });

  it("renders with an icon", () => {
    const { getByTestId } = render(
      <PasswordInput label="Password" onChangeText={() => {}} mode="flat" />
    );
    expect(getByTestId("password-input-icon")).toBeDefined();
  });

  it("calls onChangeText with the correct value", () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <PasswordInput label="Password" onChangeText={onChangeText} mode="flat" />
    );
    const input = getByTestId("password-input");
    fireEvent.changeText(input, "password");
    expect(onChangeText).toHaveBeenCalledWith("password");
  });
});
