import styled from "@emotion/native";

type Props = {
  background?: "default" | "grey";
};

export const Container = styled.ScrollView<Props>(
  ({ theme, background = "default" }) => ({
    backgroundColor:
      background === "default" ? theme.colors.white : theme.colors.grey50,
    flex: 1,
    paddingHorizontal: theme.spaces.l,
    paddingVertical: theme.spaces.l,
  }),
);
