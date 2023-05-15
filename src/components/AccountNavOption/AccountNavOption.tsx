import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import type { HeaderStackParamList } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { UserAccountIcon } from "@src/assets/icons";

import createStyleSheet from "./styles";

type AccountNavigationProps = NativeStackNavigationProp<
  HeaderStackParamList,
  "HeaderNav"
>;

const AccountNavOption = () => {
  const navigator = useNavigation<AccountNavigationProps>();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const onPress = () => {
    navigator.navigate("HeaderNav", {
      screen: "Account",
    });
  };

  return (
    <TouchableOpacity style={styles.accountNavContainer} onPress={onPress}>
      <UserAccountIcon style={styles.accountIcon} />
    </TouchableOpacity>
  );
};

export default AccountNavOption;