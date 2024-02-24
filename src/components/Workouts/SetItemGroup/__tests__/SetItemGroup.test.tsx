import { render } from "@testing-library/react-native";
import { SetItemGroup } from "../SetItemGroup";

describe("SetItemGroup", () => {
  const sets = [
    {
      id: "1",
      timeStamp: new Date().toLocaleTimeString(),
      weight: 50,
      reps: 10
    },
    {
      id: "2",
      timeStamp: new Date().toLocaleTimeString(),
      weight: 50,
      reps: 10
    }
  ];

  const date = new Date().toLocaleDateString();
  it("renders", () => {
    const { getByTestId } = render(
      <SetItemGroup sets={sets} date={date} />
    );

    expect(getByTestId("set-item-group-container")).toBeTruthy();
  });

  it("displays the date on the screen", () => {
    const { getByText } = render(
      <SetItemGroup sets={sets} date={date} />
    );

    expect(getByText(date)).toBeTruthy();
  });
});