import { render } from "@testing-library/react-native";
import { Searchbar } from "../Searchbar";

describe("Searchbar", () => {
  it("renders", () => {
    const { getByTestId } = render(<Searchbar />);

    const searchbar = getByTestId("searchbar");
    expect(searchbar).toBeTruthy();
  }); 

  it("displays a placeholder so users know what its for", () => {
    const { getByPlaceholderText } = render(<Searchbar />);

    expect(
      getByPlaceholderText("search for an exercise")
    ).toBeTruthy()
  });
})