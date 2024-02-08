// Code from:https://github.com/callstack/react-native-paper/issues/2172#issuecomment-1064976666

import { useEffect, useState } from 'react';
import { Keyboard, Platform, KeyboardEvent } from 'react-native';

export const useKeyboardAdjustment = () => {
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const onKeyboardChange = (event: KeyboardEvent) => {
      if (!event.endCoordinates || !event.startCoordinates) return;

      if (event.endCoordinates.screenY < event.startCoordinates.screenY) {
        setBottom(event.endCoordinates.height / 2);
      } else {
        setBottom(0);
      }
    };

    if (Platform.OS === "ios") {
      const subscription = Keyboard.addListener(
        "keyboardWillChangeFrame",
        onKeyboardChange
      );
      return () => subscription.remove();
    } else {
      const subscriptions = [
        Keyboard.addListener("keyboardDidHide", onKeyboardChange),
        Keyboard.addListener("keyboardDidShow", onKeyboardChange),
      ];
      return () => subscriptions.forEach((subscription) => subscription.remove());
    }
  }, []);

  return bottom;
};
