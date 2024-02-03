import "@testing-library/jest-native/extend-expect";
import { act } from "react-test-renderer"; // Import the 'act' function from 'react-test-renderer'

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  act(() => {
    jest.runOnlyPendingTimers();
  });
  jest.useRealTimers();
  jest.clearAllMocks();
});
