import { fireEvent, render } from "@testing-library/react-native";
import { TextInputModal } from "../TextInputModal";
import { AllTheProviders } from "../../../../test-utils";

describe("TextInputModal", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <TextInputModal
        visible={true}
        onDismiss={() => {}}
        title="Title"
        placeholder="Placeholder"
        onChageText={() => {}}
        onSubmit={() => {}}
        testID="test-id"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("test-id")).toBeTruthy();
  });

  it("renders title correctly", () => {
    const { getByText } = render(
      <TextInputModal
        visible={true}
        onDismiss={() => {}}
        title="Title"
        placeholder="Placeholder"
        onChageText={() => {}}
        onSubmit={() => {}}
        testID="test-id"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByText("Title")).toBeTruthy();
  });

  it("renders placeholder correctly", () => {
    const { getAllByText } = render(
      <TextInputModal
        visible={true}
        onDismiss={() => {}}
        title="Title"
        placeholder="Placeholder"
        onChageText={() => {}}
        onSubmit={() => {}}
        testID="test-id"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getAllByText("Placeholder")).toBeTruthy();
  });

  it("calls onChageText correctly", () => {
    const onChageText = jest.fn();
    const { getByTestId } = render(
      <TextInputModal
        visible={true}
        onDismiss={() => {}}
        title="Title"
        placeholder="Placeholder"
        onChageText={onChageText}
        onSubmit={() => {}}
        testID="test-id"
      />,
      { wrapper: AllTheProviders }
    );

    const input = getByTestId("add-folder-text-input");
    fireEvent.changeText(input, "new text");

    expect(onChageText).toHaveBeenCalledWith("new text");
  });

    it("calls onSubmit correctly", () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(
        <TextInputModal
            visible={true}
            onDismiss={() => {}}
            title="Title"
            placeholder="Placeholder"
            onChageText={() => {}}
            onSubmit={onSubmit}
            testID="test-id"
        />,
        { wrapper: AllTheProviders }
        );
    
        const button = getByTestId("add-button");
        fireEvent.press(button);
    
        expect(onSubmit).toHaveBeenCalled();
    });

    it("calls onDismiss correctly", () => {
        const onDismiss = jest.fn();
        const { getByTestId } = render(
        <TextInputModal
            visible={true}
            onDismiss={onDismiss}
            title="Title"
            placeholder="Placeholder"
            onChageText={() => {}}
            onSubmit={() => {}}
            testID="test-id"
        />,
        { wrapper: AllTheProviders }
        );
    
        const button = getByTestId("cancel-modal-button");
        fireEvent.press(button);
    
        expect(onDismiss).toHaveBeenCalled();
    });
});
