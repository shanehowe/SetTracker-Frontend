import { DateAndTimePicker } from "../DateAndTimePicker";
import { render, fireEvent } from "@testing-library/react-native";
import { AllTheProviders } from "../../../../test-utils";

describe("DateAndTimePicker", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("date-time-picker")).toBeTruthy();
  });

  it("should render time picker button", () => {
    const { getByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("time-picker-button")).toBeTruthy();
  });

  it("should render date picker button", () => {
    const { getByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("date-picker-button")).toBeTruthy();
  });

  it("initially hides time picker", () => {
    const { queryByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(queryByTestId("time-picker")).toBeNull();
  });

  it("initially hides date picker", () => {
    const { queryByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    expect(queryByTestId("date-picker")).toBeNull();
  });

  it("shows time picker when time picker button is pressed", () => {
    const { getByTestId, queryByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    const button = getByTestId("time-picker-button");
    fireEvent.press(button);

    expect(queryByTestId("time-picker")).toBeTruthy();
  });

  it("shows date picker when date picker button is pressed", () => {
    const { getByTestId, queryByTestId } = render(
      <DateAndTimePicker
        date={new Date()}
        setDate={() => {}}
        time={new Date()}
        setTime={() => {}}
      />,
      { wrapper: AllTheProviders }
    );

    const button = getByTestId("date-picker-button");
    fireEvent.press(button);

    expect(queryByTestId("date-picker")).toBeTruthy();
  });
});