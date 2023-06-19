import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { HeaderStackParamList } from "@src/types";

import { AccountHome } from "@src/screens";

const Stack = createNativeStackNavigator<HeaderStackParamList>();

const PlaceHolder = () => <Text>PlaceHolder</Text>;

const HeaderNav = () => {
  return (
    <Stack.Navigator initialRouteName="AccountHome">
      <Stack.Screen
        name="AccountHome"
        options={{
          headerShown: false,
        }}
        component={AccountHome}
      />
      <Stack.Screen
        name="AccountInformation"
        options={{
          headerShown: false,
        }}
        component={PlaceHolder}
      />
      <Stack.Screen
        name="About"
        options={{
          headerShown: false,
        }}
        component={PlaceHolder}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={{
          headerShown: false,
        }}
        component={PlaceHolder}
      />
    </Stack.Navigator>
  );
};

export default HeaderNav;
