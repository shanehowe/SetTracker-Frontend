import { AllTheProviders } from "../../../../test-utils";
import { OptionsList } from "../OptionsList";
import { render } from "@testing-library/react-native";


describe("OptionsList", () => {
  it("Renders the surace container", () => {
    const { getByTestId } = render(<OptionsList />, { wrapper: AllTheProviders });
    expect(getByTestId("options-list-surface")).toBeTruthy();
  });

  it("Renders a list item with the text 'Appearance'", () => {
    const { getByText } = render(<OptionsList />, { wrapper: AllTheProviders });
    expect(getByText("Appearance")).toBeOnTheScreen();
  });
})