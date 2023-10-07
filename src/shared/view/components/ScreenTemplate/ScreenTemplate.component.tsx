import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CustomScrollView } from "@src/shared/view/components/CustomScrollView/CustomScrollView.component";
import { QueryBoundaries } from "@src/shared/view/components/QueryBoundaries/QueryBoundaries.component";
import { ScreenContainer } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.styles";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export const ScreenTemplate = ({ header, children }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <ScreenContainer>
      {header ?? <Spacer vertical={top} />}
      <QueryBoundaries>
        <CustomScrollView>
          {children}
          <Spacer vertical={bottom} />
        </CustomScrollView>
      </QueryBoundaries>
    </ScreenContainer>
  );
};
