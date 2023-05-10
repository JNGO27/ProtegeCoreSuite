import { HomeIcon, UserStudent } from "@src/assets/icons";

import type { Route } from "@react-navigation/native";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import type { TabNavigatorParamList } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";

import createStyleSheet from "@src/navigation/TabNavigator/styles";

type ScreenOptionsProps = {
  route: Route<keyof TabNavigatorParamList>;
};

const useInitScreenOptions = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return ({ route }: ScreenOptionsProps): BottomTabNavigationOptions => ({
    // eslint-disable-next-line consistent-return
    tabBarIcon: ({ color, size }) => {
      if (route.name === "HomeNav") {
        return <HomeIcon color={color} width={size} height={size} />;
      }

      if (route.name === "StudentsNav") {
        return <UserStudent color={color} width={size} height={size} />;
      }
    },
    tabBarStyle: styles.tabBarStyleSheet,
    tabBarHideOnKeyboard: true,
  });
};

export default useInitScreenOptions;
