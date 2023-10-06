import { colors } from "@src/shared/view/theme/colors";
import { Flatten } from "@src/shared/view/theme/utils";

export type Colors = typeof colors;

export type ThemeColor = Flatten<Colors>;
