import { render } from "@testing-library/react-native";
import { SetItemGroup } from "../SetItemGroup";
import { ExerciseSet } from "../../../../types";
import { AllTheProviders } from "../../../../test-utils";

describe("SetItemGroup", () => {
  const sets: ExerciseSet[] = [
    {
      id: "1",
      dateCreated: new Date().toLocaleTimeString(),
      weight: 50,
      reps: 10,
      exerciseId: "1"
    },
    {
      id: "2",
      dateCreated: new Date().toLocaleTimeString(),
      weight: 50,
      reps: 10,
      exerciseId: "1"
    }
  ];

  const date = new Date().toLocaleDateString();
  it("renders", () => {
    const { getByTestId } = render(
      <SetItemGroup sets={sets} date={date} />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("set-item-group-container")).toBeTruthy();
  });

  it("displays the date on the screen", () => {
    const { getByText } = render(
      <SetItemGroup sets={sets} date={date} />,
      { wrapper: AllTheProviders }
    );

    expect(getByText(date)).toBeTruthy();
  });
});