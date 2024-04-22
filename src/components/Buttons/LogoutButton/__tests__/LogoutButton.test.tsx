import { AuthProvidor } from "../../../../contexts/AuthContext";
import { AllTheProviders } from "../../../../test-utils";
import { LogoutButton } from "../LogoutButton";
import { fireEvent, render } from "@testing-library/react-native";

const mockSignOut = jest.fn();
jest.mock("../../../../contexts/AuthContext", () => {
  const originalModule = jest.requireActual("../../../../contexts/AuthContext");
  return {
    __esmodule: true,
    ...originalModule,
    useAuth: () => {
      return { signOut: mockSignOut };
    },
  };
});

describe("LogoutButton", () => {
  it("Renders a surface surrounding the button", () => {
    const { getByTestId } = render(<LogoutButton />, {
      wrapper: AllTheProviders,
    });
    expect(getByTestId("logout-btn-surface")).toBeTruthy();
  });

  it("Calls the signout method in useAuth hook when pressed", () => {
    const { getByTestId } = render(
      <AuthProvidor>
        <LogoutButton />
      </AuthProvidor>,
      { wrapper: AllTheProviders }
    );

    const listItem = getByTestId("logout-btn");
    fireEvent.press(listItem);
    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});
