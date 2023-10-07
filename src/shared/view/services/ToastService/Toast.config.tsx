import type { ReactElement } from "react";
import React from "react";
import type { BaseToastProps } from "react-native-toast-message";

import { ToastType } from "@src/shared/view/services/ToastService/Toast.service.interface";

import { Toast } from "./Toast.component";

export interface ToastNotificationProps {
  title: string;
  body: string;
  type: ToastType;
}

function ToastNotification({
  type,
  title,
  body,
}: ToastNotificationProps): ReactElement {
  return <Toast type={type} title={title} body={body} />;
}

export const toastConfiguration: Record<
  ToastType,
  (
    props: BaseToastProps & {
      props: ToastNotificationProps;
    },
  ) => ReactElement
> = {
  info: (props) => <ToastNotification {...props.props} type="info" />,
  success: (props) => <ToastNotification {...props.props} type="success" />,
  warning: (props) => <ToastNotification {...props.props} type="warning" />,
  error: (props) => <ToastNotification {...props.props} type="error" />,
};
