import { spaces } from "@src/shared/view/theme/spaces";
import { Flatten } from "@src/shared/view/theme/utils";

export type Spaces = typeof spaces;
export type ThemeSpace = Flatten<Spaces>;
