import { ISingleOption } from './SelectInput.model';

export const exampleOptions = [
  {
    id: 1,
    value: 'Bootstrap',
  },
  {
    id: 2,
    value: 'Angular',
  },
  {
    id: 3,
    value: 'JQuery',
  },
  {
    id: 4,
    value: 'Vue',
  },
  {
    id: 5,
    value: 'WordPress',
  },
];

export const handleOnClick = (callback: () => ISingleOption[]): void => {
  callback(); // save values from callback()
};
