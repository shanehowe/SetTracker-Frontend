import { renderHook, act } from '@testing-library/react-native';
import { useKeyboardAdjustment } from '../useKeyboardAdjustment';
import { Keyboard, Platform } from 'react-native';

// Mock Platform module to control the OS in tests
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn(),
}));

describe('useKeyboardAdjustment', () => {
  beforeAll(() => {
    // Mock addListener and remove methods on Keyboard
    Keyboard.addListener = jest.fn().mockImplementation((event, callback) => {
      const keyboardHeight = 300; // keyboard height
      const screenYStart = 800; // starting screen Y
      const screenYEnd = screenYStart - keyboardHeight; // simulate keyboard covering screen

      const mockEvent = {
        startCoordinates: { screenY: screenYStart },
        endCoordinates: { screenY: screenYEnd, height: keyboardHeight },
      };

      act(() => {
        callback(mockEvent);
      });

      return { remove: jest.fn() };
    });
  });

  it('adjusts bottom padding for iOS keyboard', () => {
    Platform.OS = 'ios';

    const { result } = renderHook(() => useKeyboardAdjustment());
    expect(result.current).toEqual(150); // Half of the mocked keyboard height
  });

  it('adjusts bottom padding for Android keyboard', () => {
    Platform.OS = "android";

    const { result } = renderHook(() => useKeyboardAdjustment());
    expect(result.current).toEqual(150); // Half of the mocked keyboard height
  });
});
