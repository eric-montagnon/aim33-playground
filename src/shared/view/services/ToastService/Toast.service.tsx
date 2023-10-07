import React from 'react';
import RNToast from 'react-native-toast-message';

import { IToastService } from '@src/shared/view/services/ToastService/Toast.service.interface';

import { toastConfiguration } from './Toast.config';

const show: IToastService['show'] = ({
  title,
  body,
  type,
  duration = 3000,
  position = 'top',
  onPress,
}) => {
  RNToast.show({
    type,
    autoHide: duration !== null,
    visibilityTime: duration || undefined,
    position,
    props: {
      title,
      body,
    },
    onPress,
  });
  return () => {
    RNToast.hide();
  };
};

const Toast: IToastService['Toast'] = () => (
  <RNToast config={toastConfiguration} topOffset={0} />
);

export const ToastService: IToastService = { show, Toast };
