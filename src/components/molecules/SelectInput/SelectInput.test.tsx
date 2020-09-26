import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SelectInput from './SelectInput';

describe('SelectInput', () => {
  test('render default SelectInput component', () => {
    render(
      <SelectInput
        inputPlaceholder="inputplaceholder"
        selectCaption=""
        options={[{ id: '0', value: 'Option 1' }]}
        onClick={() => {}}
      />
    );
  });
  test('fires OnClick event on selection change', () => {
    const mock = jest.fn();
    const option1 = { id: '0', value: 'Option 1' };
    const { getByText } = render(
      <SelectInput
        inputPlaceholder="inputplaceholder"
        selectCaption="selectCaption"
        options={[option1]}
        onClick={mock}
        isOpen
      />
    );

    fireEvent.click(getByText(option1.value));

    expect(mock).toHaveBeenLastCalledWith([option1]);
  });
});
