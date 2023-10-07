import React from "react";
import { ActivityIndicator } from "react-native";

interface LoaderProps {
  color?: string;
  testID?: string;
}

export const Loader = ({
  color = undefined,
  testID = undefined,
}: LoaderProps) => <ActivityIndicator color={color} testID={testID} />;
