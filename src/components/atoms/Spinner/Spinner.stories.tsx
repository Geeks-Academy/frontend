import { IAttributes } from 'types/interfaces';
import Spinner from './Spinner';

export default {
  title: 'atoms/Spinner',
  component: Spinner,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export const SpinnerComponent = (props: IAttributes<HTMLDivElement>): JSX.Element => (
  <Spinner {...props} />
);
