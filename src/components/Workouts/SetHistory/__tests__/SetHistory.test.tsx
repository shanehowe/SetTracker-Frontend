import { SetHistory } from "../SetHistory";
import { render } from "@testing-library/react-native";


describe("SetHistory", () => {
  const history = [
    {
      date: new Date().toDateString(),
      sets: [
        {
          id: "1",
          timeStamp: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
        {
          id: "2",
          timeStamp: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
      ],
    },
    {
      date: new Date("2020-03-01").toDateString(),
      sets: [
        {
          id: "4",
          timeStamp: new Date().toLocaleTimeString(),
          weight: 50,
          reps: 10,
        },
        {
          id: "5",
          timeStamp: new Date().toLocaleTimeString(),
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
    expect(queryAllByText(new Date().toDateString())).toHaveLength(1);
    expect(queryAllByText(new Date("2020-03-01").toDateString())).toHaveLength(1);
  });
});