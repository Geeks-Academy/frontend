import React from 'react';
import { render } from '@testing-library/react';
import Toast from './Toast';
import { DefaultToastHeaders, DefaultToastInfo } from './Toast.model';

describe('Toast', () => {
  test('render default Toast component without info', () => {
    const { getByTestId, getByText } = render(<Toast />);
    expect(getByTestId('toastDefault')).toBeInTheDocument();
    expect(getByText(DefaultToastHeaders.ERROR)).toBeInTheDocument();
  });
  test('render default Toast component with info', () => {
    const info = 'Test info';
    const { getByTestId, getByText } = render(<Toast info={info} />);
    expect(getByTestId('toastDefault')).toBeInTheDocument();
    expect(getByText(DefaultToastHeaders.ERROR)).toBeInTheDocument();
  });
  test('render success Toast component with default header and info', () => {
    const { getByTestId, getByText } = render(<Toast type="success" />);
    expect(getByTestId('toastSuccess')).toBeInTheDocument();
    expect(getByText(DefaultToastHeaders.SUCCESS)).toBeInTheDocument();
    expect(getByText(DefaultToastInfo.SUCCESS)).toBeInTheDocument();
  });
  test('render error Toast component with default header and info', () => {
    const { getByTestId, getByText } = render(<Toast type="error" />);
    expect(getByTestId('toastError')).toBeInTheDocument();
    expect(getByText(DefaultToastHeaders.ERROR)).toBeInTheDocument();
    expect(getByText(DefaultToastInfo.ERROR)).toBeInTheDocument();
  });
  test('render info Toast component with default header and info', () => {
    const { getByTestId, getByText } = render(<Toast type="info" />);
    expect(getByTestId('toastInfo')).toBeInTheDocument();
    expect(getByText(DefaultToastHeaders.INFO)).toBeInTheDocument();
    expect(getByText(DefaultToastInfo.INFO)).toBeInTheDocument();
  });
  test('render success Toast component with header and info props', () => {
    const header = 'Test header';
    const info = 'Test info';
    const { getByText } = render(<Toast type="success" header={header} info={info} />);
    expect(getByText(header)).toBeInTheDocument();
    expect(getByText(info)).toBeInTheDocument();
  });
  test('render error Toast component with header and info props', () => {
    const header = 'Test header';
    const info = 'Test info';
    const { getByText } = render(<Toast type="error" header={header} info={info} />);
    expect(getByText(header)).toBeInTheDocument();
    expect(getByText(info)).toBeInTheDocument();
  });
  test('render info Toast component with header and info props', () => {
    const header = 'Test header';
    const info = 'Test info';
    const { getByText } = render(<Toast type="info" header={header} info={info} />);
    expect(getByText(header)).toBeInTheDocument();
    expect(getByText(info)).toBeInTheDocument();
  });
});
