import { useTheme } from "@emotion/react";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ToastType } from "@src/shared/view/services/ToastService/Toast.service.interface";

import { Tooltip } from "@src/shared/view/components/Tooltip/Tooltip.component";

import * as S from "./Toast.styles";

type ToastProps = {
  type: ToastType;
  title: string;
  body: string;
};

export const Toast = ({ type, title, body }: ToastProps) => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <S.Container>
      <Tooltip
        type={type}
        title={title}
        body={body}
        containerStyle={{ paddingTop: theme.spaces.m + top }}
      />
    </S.Container>
  );
};
