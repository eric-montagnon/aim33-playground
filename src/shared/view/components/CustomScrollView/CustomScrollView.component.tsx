import styled from "@emotion/native";
import { ScrollView } from "react-native";

export const CustomScrollView = styled(ScrollView)();

CustomScrollView.defaultProps = {
  showsVerticalScrollIndicator: false,
  alwaysBounceVertical: false,
  alwaysBounceHorizontal: false,
  keyboardShouldPersistTaps: "handled",
  contentContainerStyle: {
    flexGrow: 1,
  },
};
