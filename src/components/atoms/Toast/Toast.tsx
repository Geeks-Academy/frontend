import React from 'react';
import { DefaultToastHeaders, DefaultToastInfo, IToast } from './Toast.model';
import { ToastContent, ToastHeader, ToastIconWrapper, ToastInfo } from './Toast.styled';
import { ToastIconError, ToastIconInfo, ToastIconSuccess } from '../../../assets';

const Toast = ({ className, header, info, type = 'error' }: IToast): JSX.Element => {
  switch (type) {
    case 'success':
      return (
        <ToastContent data-testid="toastSuccess" className={className}>
          <ToastIconWrapper>
            <ToastIconSuccess />
          </ToastIconWrapper>
          <div>
            <ToastHeader>{!header ? DefaultToastHeaders.SUCCESS : header}</ToastHeader>
            <ToastInfo>{!info ? DefaultToastInfo.SUCCESS : info}</ToastInfo>
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
            <ToastHeader>{!header ? DefaultToastHeaders.ERROR : header}</ToastHeader>
            <ToastInfo>{!info ? DefaultToastInfo.ERROR : info}</ToastInfo>
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
            <ToastHeader>{!header ? DefaultToastHeaders.INFO : header}</ToastHeader>
            <ToastInfo>{!info ? DefaultToastInfo.INFO : info}</ToastInfo>
          </div>
        </ToastContent>
      );
    default:
      return (
        <ToastContent data-testid="toastDefault" className={className}>
          <div>
            <ToastIconWrapper>
              <ToastIconError />
            </ToastIconWrapper>
            <div>
              <ToastHeader>{!header ? DefaultToastHeaders.ERROR : header}</ToastHeader>
              <ToastInfo>{!info ? null : info}</ToastInfo>
            </div>
          </div>
        </ToastContent>
      );
  }
};

export default Toast;
