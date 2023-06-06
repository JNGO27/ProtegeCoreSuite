import { memo } from "react";
import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { CardNavOption, SelectableText } from "@src/components";

import type { FamilyCardType, AllStudentFamilyDataCard } from "@src/types";

import { PhoneSvg, EmailSvg } from "@src/assets/icons";

import createStyleSheet from "./styles";

type Props = {
  first_name: FamilyCardType["parent_guardian_first_name_1"];
  last_name: FamilyCardType["parent_guardian_last_name_1"];
  phone_number: FamilyCardType["phone_number"];
  email_address: FamilyCardType["email_address"];
  currentAllData: AllStudentFamilyDataCard;
};

const FamilyCard = ({
  first_name,
  last_name,
  phone_number,
  email_address,
  currentAllData,
}: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.familyCard}>
      <View style={styles.parentContainer}>
        <View style={styles.familyDetailsContainer}>
          <View style={styles.familyProfileContainer}>
            <View style={styles.profileCircle}>
              <Text style={styles.initials}>
                {last_name[0]}.{first_name[0]}
              </Text>
            </View>
            <Text style={styles.profileName}>
              {last_name}, {first_name}
            </Text>
          </View>
          <View style={styles.contactInformationContainer}>
            <View style={styles.iconContainer}>
              <PhoneSvg style={styles.phoneIcon} />
              <SelectableText content={phone_number} styles={styles} />
            </View>
            <View style={styles.iconContainer}>
              <EmailSvg style={styles.emailIcon} color="black" />
              <SelectableText styles={styles} content={email_address} />
            </View>
          </View>
        </View>
        <CardNavOption
          cardOption="FamilyCardDetails"
          currentAllData={currentAllData}
        />
      </View>
    </View>
  );
};

export default memo(FamilyCard);
