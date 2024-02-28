import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { WeightIncrementToolbar } from '../WeightIncrementToolBar';

describe('WeightIncrementToolbar', () => {
  it('calls onIncrement with the correct value when a button is pressed', () => {
    const handleIncrement = jest.fn();
    const { getByText } = render(<WeightIncrementToolbar onIncrement={handleIncrement} />);

    fireEvent.press(getByText('+1'));
    expect(handleIncrement).toHaveBeenCalledWith(1);

    fireEvent.press(getByText('+2.5'));
    expect(handleIncrement).toHaveBeenCalledWith(2.5);

    fireEvent.press(getByText('+5'));
    expect(handleIncrement).toHaveBeenCalledWith(5);

    fireEvent.press(getByText('+10'));
    expect(handleIncrement).toHaveBeenCalledWith(10);
  });
});