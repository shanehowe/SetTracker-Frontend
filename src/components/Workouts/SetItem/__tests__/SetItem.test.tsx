import { render } from "@testing-library/react-native";
import { SetItem } from "../SetItem";
import { AllTheProviders } from "../../../../test-utils";

describe("SetItem", () => {
  const timeStamp = new Date().toLocaleTimeString();
  const set = {
    time: timeStamp,
    weight: 60,
    reps: 10
  }

  it("renders", () => {
    const { getByTestId } = render(
      <SetItem set={set} />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("set-item")).toBeTruthy();
  });

  it("displays the the time, reps, and weight on the screen", () => {
    const { getByText } = render(
      <SetItem set={set} />,
      { wrapper: AllTheProviders }
    );

    expect(getByText(timeStamp)).toBeTruthy();
    expect(getByText("60")).toBeTruthy();
    expect(getByText("10")).toBeTruthy()
  });
});
