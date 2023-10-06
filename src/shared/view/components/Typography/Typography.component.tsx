import { useTheme } from "@emotion/react";
import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";

import { ThemeColor } from "@src/shared/view/theme/colors.types";
import {
  ParagraphFontSize,
  ParagraphFontType,
  TitleFontSize,
} from "@src/shared/view/theme/fonts.types";

type TitleProps = TextProps & {
  size: TitleFontSize;
  children: ReactNode;
  color?: ThemeColor;
};

const Title = ({
  children,
  size,
  color,
  accessibilityRole = "header",
  style,
  ...props
}: TitleProps) => {
  const theme = useTheme();
  return (
    <Text
      accessibilityRole={accessibilityRole} //TODO on android 'header' is not read out
      style={[
        theme.fonts.title[size],
        { color: color ?? theme.colors.textNormal },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export type ParagraphProps = TextProps & {
  size: ParagraphFontSize;
  type?: ParagraphFontType;
  children: ReactNode;
  color?: ThemeColor;
  underlined?: boolean;
  maxLinesBeforeEllipsis?: number;
} & TextProps;

const Paragraph = ({
  children,
  size,
  type = "regular",
  color,
  underlined,
  maxLinesBeforeEllipsis = 0, //this means no restriction if set to 0
  style,
  ...textProps
}: ParagraphProps) => {
  const theme = useTheme();
  const underlineStyle = {
    textDecorationLine: underlined ? "underline" : "none",
  } as const;

  return (
    <Text
      style={[
        theme.fonts.paragraph[size][type],
        { color: color ?? theme.colors.textNormal },
        underlineStyle,
        style,
      ]}
      {...textProps}
      numberOfLines={maxLinesBeforeEllipsis}
    >
      {children}
    </Text>
  );
};

export type TypographyProps = Omit<ParagraphProps, "size">;

export const Typography = {
  Title,
  P1: (props: TypographyProps) => <Paragraph size="p1" {...props} />,
  P2: (props: TypographyProps) => <Paragraph size="p2" {...props} />,
  P3: (props: TypographyProps) => <Paragraph size="p3" {...props} />,
};
