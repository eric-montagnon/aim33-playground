import styled from "@emotion/native";

export const InputContainer = styled.Pressable<{
  isDisabled: boolean;
  isError: boolean;
  isFocused: boolean;
}>(({ theme, isDisabled, isFocused, isError }) => {
  const getColor = () => {
    if (isError) return theme.colors.statusError;
    if (isFocused) return theme.colors.primary500;
    return theme.colors.grey100;
  };
  return {
    backgroundColor: !isDisabled ? theme.colors.white : theme.colors.grey50,
    borderColor: getColor(),
    borderWidth: theme.spaces.halfXxs,
    borderRadius: theme.spaces.s,
    paddingVertical: theme.spaces.s,
    paddingHorizontal: theme.spaces.m,
    flexDirection: "row",
    justifyContent: "space-between",
    height: theme.spaces.xxl,
  };
});
