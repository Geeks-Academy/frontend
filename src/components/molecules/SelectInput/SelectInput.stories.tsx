import { Meta, Story } from '@storybook/react/types-6-0';

import SelectInput from './SelectInput';
import { ISelectInput } from './SelectInput.model';

export default {
  title: 'molecules/SelectInput',
  component: SelectInput,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ISelectInput> = (props: ISelectInput): JSX.Element => (
  <SelectInput {...props} />
);

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options: [
    { id: '0', value: 'Option 1' },
    { id: '1', value: 'Option 2' },
    { id: '2', value: 'Option 3' },
    { id: '3', value: 'Option 4' },
    { id: '4', value: 'Option 5' },
    { id: '5', value: 'Option 6' },
    { id: '6', value: 'Option 7' },
    { id: '7', value: 'Option 8' },
  ],
  selectCaption: 'Multi select',
  inputPlaceholder: 'Start typing...',
  isMulti: false,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  ...SingleSelect.args,
  isMulti: true,
};
export const NoOptions = Template.bind({});
NoOptions.args = {
  ...SingleSelect.args,
  options: [],
};
