import React from "react";

import {
  Typography,
  TypographyProps,
} from "@src/shared/view/components/Typography/Typography.component";

export type ButtonTypographyProps = {
  style: Pick<TypographyProps, "type" | "underlined" | "color">;
  children: TypographyProps["children"];
};

export const ButtonTypography = (props: ButtonTypographyProps) => (
  <Typography.P1 {...props.style}>{props.children}</Typography.P1>
);
