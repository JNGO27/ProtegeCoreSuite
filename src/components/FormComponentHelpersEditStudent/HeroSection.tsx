import { Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import type { ImageStyle } from "expo-image";

import type { StyleSheetProps } from "@src/types";

import { StudentIllustration } from "@src/assets/illustrations";

import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

type Props = {
  styles: StyleSheetProps;
};

const HeroSection = ({ styles }: Props) => {
  return (
    <LinearGradient
      style={styles.imageContainer}
      colors={purpleGradient.colors}
      locations={purpleGradient.locations}
      start={purpleGradient.start}
      end={purpleGradient.end}
    >
      <Text style={styles.headerText}>Edit Student</Text>
      <Image
        source={StudentIllustration}
        contentFit="contain"
        style={styles.addStudentImage as ImageStyle}
      />
    </LinearGradient>
  );
};

export default HeroSection;
