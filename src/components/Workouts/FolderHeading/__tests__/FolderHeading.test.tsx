import { render } from "@testing-library/react-native";
import { FolderHeading } from "../FolderHeading";

describe("FolderHeading", () => {
  it("should render the FolderHeading component", () => {
    const { getByTestId } = render(<FolderHeading folderName="Test Folder" />);
    const folderHeading = getByTestId("folder-heading");

    expect(folderHeading).toBeTruthy();
  });

  it("should display the folder name passed as a prop", () => {
    const { getByText } = render(<FolderHeading folderName="Test Folder" />);
    const folderName = getByText("Test Folder");

    expect(folderName).toBeTruthy();
  });
});