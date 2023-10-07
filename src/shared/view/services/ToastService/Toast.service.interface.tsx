import { FC } from "react";

export type ToastType = "error" | "info" | "success" | "warning";

export type ToastPosition = "top" | "bottom";

interface ShowToastParams {
  title: string;
  body: string;
  type: ToastType;
  duration?: number | null;
  position?: ToastPosition;
  onPress?: () => void;
}

export interface IToastService {
  show: (params: ShowToastParams) => () => void;
  Toast: FC;
}
