import { render } from "@testing-library/react-native";
import { AllTheProviders } from "../../../../test-utils";
import { NumberInput } from "../NumberInput";

describe("NumberInput", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <NumberInput
        increment={5} 
        decrement={5} 
        value="0" 
        onChange={() => {}} label="Weight" 
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("number-input")).toBeTruthy();
  });

  it("should display the correct label", () => {
    const { getByText } = render(
      <NumberInput
        increment={5} 
        decrement={5} 
        value="0" 
        onChange={() => {}} 
        label="Weight" 
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByText("Weight")).toBeTruthy();
  });

  it("should render a plus and minus button", () => {
    const { getByTestId } = render(
      <NumberInput
        increment={5} 
        decrement={5} 
        value="0" 
        onChange={() => {}} 
        label="Weight" 
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("plus-button")).toBeTruthy();
    expect(getByTestId("minus-button")).toBeTruthy();
  });
});