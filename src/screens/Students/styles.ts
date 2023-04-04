import { StyleSheet } from "react-native";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { lightPurples },
} = globalStyles;

export default () => {
  return StyleSheet.create({
    container: {
      width: "100%",
      minHeight: "100%",
      backgroundColor: lightPurples.lightPurple100,
    },
    scrollContainer: {
      display: "flex",
      flex: 1,
    },
    cardsContainer: {
      width: "100%",
      paddingLeft: spacing.multipleL * 1,
    },
    cardsContainerFlex: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      gap: spacing.multipleReg * 2,
    },
  });
};
