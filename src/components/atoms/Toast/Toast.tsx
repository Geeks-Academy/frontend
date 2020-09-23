import React from 'react';
import { ToastIconError, ToastIconInfo, ToastIconSuccess } from 'assets';
import { DefaultToastHeaders, DefaultToastInfo, IProps } from './Toast.model';
import { ToastContent, ToastHeader, ToastIconWrapper, ToastInfo } from './Toast.styled';

const Toast = ({ className, header, info, type }: IProps): JSX.Element => {
  switch (type) {
    case 'success':
      return (
        <ToastContent data-testid="toastSuccess" className={className}>
          <ToastIconWrapper>
            <ToastIconSuccess />
          </ToastIconWrapper>
          <div>
            <ToastHeader>{header || DefaultToastHeaders.SUCCESS}</ToastHeader>
            <ToastInfo>{info || DefaultToastInfo.SUCCESS}</ToastInfo>
          </div>
        </ToastContent>
      );
    case 'error':
      return (
        <ToastContent data-testid="toastError" className={className}>
          <ToastIconWrapper>
            <ToastIconError />
          </ToastIconWrapper>
          <div>
            <ToastHeader>{header || DefaultToastHeaders.ERROR}</ToastHeader>
            <ToastInfo>{info || DefaultToastInfo.ERROR}</ToastInfo>
          </div>
        </ToastContent>
      );
    case 'info':
      return (
        <ToastContent data-testid="toastInfo" className={className}>
          <ToastIconWrapper>
            <ToastIconInfo />
          </ToastIconWrapper>
          <div>
            <ToastHeader>{header || DefaultToastHeaders.INFO}</ToastHeader>
            <ToastInfo>{info || DefaultToastInfo.INFO}</ToastInfo>
          </div>
        </ToastContent>
      );
    default:
      return (
        <ToastContent data-testid="toastDefault" className={className}>
          <ToastIconWrapper>
            <ToastIconError />
          </ToastIconWrapper>
          <div>
            <ToastHeader>{header || DefaultToastHeaders.ERROR}</ToastHeader>
            {info && <ToastInfo>{info}</ToastInfo>}
          </div>
        </ToastContent>
      );
  }
};

export default Toast;
