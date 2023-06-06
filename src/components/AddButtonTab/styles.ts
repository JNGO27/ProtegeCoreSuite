/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { whites, blacks },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const addTabSize = spacing.multipleXL * 5;

  return StyleSheet.create({
    addButton: {
      position: "absolute",
      right: spacing.multipleXL,
      bottom: spacing.multipleXL * 7,
      width: addTabSize,
      height: addTabSize,
      borderRadius: addTabSize / 2,
      padding: spacing.multipleS,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: whites.white200,
      shadowColor: blacks.blackTransparent,
      shadowOffset: { width: 0, height: -1.5 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 15,
    },
    addButtonTouchable: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    addButtonIcon: {
      color: whites.white200,
      fontFamily: typography.semiBold,
      fontSize: moderateScale(spacing.multipleReg * 3.25),
    },
  });
};
