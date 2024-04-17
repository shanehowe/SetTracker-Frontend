import { render } from "@testing-library/react-native";
import { SetItem } from "../SetItem";
import { AllTheProviders } from "../../../../test-utils";

describe("SetItem", () => {
  const dateCreated = "2024-04-17T17:18:03.310756+00:00";
  const set = {
    id: "1",
    dateCreated,
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

    expect(getByText("6:18:03 PM")).toBeTruthy();
    expect(getByText("60KG")).toBeTruthy();
    expect(getByText("10 reps")).toBeTruthy()
  });
});
