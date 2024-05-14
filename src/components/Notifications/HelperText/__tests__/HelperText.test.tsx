import { render } from "@testing-library/react-native";
import { HelperText } from "../HelperText";
import { PaperProvider } from "react-native-paper";

describe("HelperText", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<HelperText text="Error" visible={true} />, { wrapper: PaperProvider });
    expect(getByTestId("helper-txt")).toBeDefined();
  });

  it("renders correctly with info type", () => {
    const { getByTestId } = render(<HelperText text="Info" visible={true} type="info" />, { wrapper: PaperProvider });
    expect(getByTestId("helper-txt")).toBeDefined();
  });

  it("renders the correct text passed in", () => {
    const { getByText } = render(<HelperText text="Error" visible={true} />, { wrapper: PaperProvider });
    expect(getByText("Error")).toBeDefined();
  })
});