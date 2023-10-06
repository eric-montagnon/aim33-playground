import { colors } from "@src/shared/view/theme/colors";
import { ThemeColor } from "@src/shared/view/theme/colors.types";

export type CheckBoxState = "checked" | "unchecked";
export type CheckBoxAvailability = "enabled" | "disabled";

type CheckBoxStyle = Record<
  CheckBoxState,
  Record<
    CheckBoxAvailability,
    { checkBoxColor: ThemeColor; labelColor: ThemeColor }
  >
>;

export const checkBoxStyle: CheckBoxStyle = {
  checked: {
    enabled: {
      checkBoxColor: colors.black,
      labelColor: colors.black,
    },
    disabled: {
      checkBoxColor: colors.grey200,
      labelColor: colors.grey300,
    },
  },
  unchecked: {
    enabled: {
      checkBoxColor: colors.grey200,
      labelColor: colors.black,
    },
    disabled: {
      checkBoxColor: colors.grey200,
      labelColor: colors.grey300,
    },
  },
};
