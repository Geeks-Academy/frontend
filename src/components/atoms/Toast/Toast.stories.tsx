import React from 'react';
import Toast from './Toast';

export default {
  title: 'atoms/Toast',
  component: Toast,
};

export const ToastWithoutAnyProps = (): JSX.Element => <Toast />;

export const ToastErrorWithDefaultHeaderAndInfo = (): JSX.Element => <Toast type="error" />;

export const ToastSuccessWithDefaultHeaderAndInfo = (): JSX.Element => <Toast type="success" />;

export const ToastInfoWithDefaultHeaderAndInfo = (): JSX.Element => <Toast type="info" />;

export const ToastErrorWithHeaderPropsAndDefaultInfo = (): JSX.Element => (
  <Toast type="error" header="Test header" />
);

export const ToastSuccessWithHeaderPropsAndDefaultInfo = (): JSX.Element => (
  <Toast type="success" header="Test header" />
);

export const ToastInfoWithHeaderPropsAndDefaultInfo = (): JSX.Element => (
  <Toast type="info" header="Test header" />
);

export const ToastErrorWithHeaderAndInfoProps = (): JSX.Element => (
  <Toast type="error" header="Test header" info="Test info" />
);

export const ToastSuccessWithHeaderAndInfoProps = (): JSX.Element => (
  <Toast type="success" header="Test header" info="Test info" />
);
export const ToastInfoWithHeaderAndInfoProps = (): JSX.Element => (
  <Toast type="info" header="Test header" info="Test info" />
);
