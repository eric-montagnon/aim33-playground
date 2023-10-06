import { Theme as ThemeInterface } from "@src/shared/view/theme/theme.types";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeInterface {}
}
