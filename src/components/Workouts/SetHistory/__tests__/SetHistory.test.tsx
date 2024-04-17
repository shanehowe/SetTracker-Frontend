import { SetHistory } from "../SetHistory";
import { render } from "@testing-library/react-native";

const timestamp1 = "2024-04-17T17:18:03.310756+00:00";
const timestamp2 = "2024-04-16T17:18:03.310756+00:00";

describe("SetHistory", () => {
  const history = [
    {
      dateCreated: timestamp1,
      sets: [
        {
          id: "1",
          dateCreated: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
        {
          id: "2",
          dateCreated: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
      ],
    },
    {
      dateCreated: timestamp2,
      sets: [
        {
          id: "4",
          dateCreated: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
        {
          id: "5",
          dateCreated: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
      ],
    }
  ];

  it("renders correctly", () => {
    const { queryByTestId } = render(<SetHistory history={history} />);
    expect(queryByTestId("set-history")).not.toBeNull();
  });

  it("renders the correct number of SetItemGroups", () => {
    const { queryAllByTestId } = render(<SetHistory history={history} />);
    expect(queryAllByTestId("set-item-group-container")).toHaveLength(2);
  });

  it("displays the correct date for each SetItemGroup", () => {
    const { queryAllByText } = render(<SetHistory history={history} />);
    expect(queryAllByText(
      new Date(timestamp1).toLocaleDateString()
    )).toHaveLength(1);
    expect(queryAllByText(new Date(timestamp2).toLocaleDateString())).toHaveLength(1);
  });
});