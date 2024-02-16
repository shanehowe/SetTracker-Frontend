import { fireEvent, render } from "@testing-library/react-native";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal";
import { AllTheProviders } from "../../../../test-utils";

describe("ConfirmActionModal", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <ConfirmDeleteModal
        visible={true}
        onDismiss={() => {}}
        onConfirm={() => {}}
        title="Title"
        message="Message"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("confirm-delete-modal")).toBeTruthy();
  });

  it("displays the text passed to it", () => {
    const { getByText } = render(
      <ConfirmDeleteModal
        visible={true}
        onDismiss={() => {}}
        onConfirm={() => {}}
        title="Title"
        message="Message"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByText("Title")).toBeTruthy();
  });

  it("displays the correct buttons", () => {
    const { getByTestId } = render(
      <ConfirmDeleteModal
        visible={true}
        onDismiss={() => {}}
        onConfirm={() => {}}
        title="Title"
        message="Message"
      />,
      { wrapper: AllTheProviders }
    );

    expect(getByTestId("confirm-button")).toBeTruthy();
    expect(getByTestId("cancel-button")).toBeTruthy();
  });

  it("calls the correct function when the confirm button is pressed", () => {
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDeleteModal
        visible={true}
        onDismiss={() => {}}
        onConfirm={onConfirm}
        title="Title"
        message="Message"
      />,
      { wrapper: AllTheProviders }
    );

    fireEvent.press(getByTestId("confirm-button"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls the correct function when the cancel button is pressed", () => {
    const onDismiss = jest.fn();
    const { getByTestId } = render(
      <ConfirmDeleteModal
        visible={true}
        onDismiss={onDismiss}
        onConfirm={() => {}}
        title="Title"
        message="Message"
      />,
      { wrapper: AllTheProviders }
    );

    fireEvent.press(getByTestId("cancel-button"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});