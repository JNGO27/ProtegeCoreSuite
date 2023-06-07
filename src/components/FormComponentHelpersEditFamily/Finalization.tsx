/* eslint-disable @typescript-eslint/naming-convention */
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormikContext } from "formik";
import { useAppDispatch } from "@src/redux";

import {
  setTimedStatusMessageOccured,
  setTimedStatusMessageType,
} from "@src/redux/features/generalGlobalData";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import type { EditFamilyFormValues, CardsNavParamList } from "@src/types";

import { useEditFamilyFormContext } from "@src/contexts/EditFamilyFormContext";

import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

type AddFamilyNavigationProps = NativeStackNavigationProp<
  CardsNavParamList,
  "FamilyCardDetails"
>;

const Finalization = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation<AddFamilyNavigationProps>();
  const { validateForm, setTouched, resetForm } = useFormikContext();
  const { handleSubmit, values, styles } = useEditFamilyFormContext();

  const handleErrorStyles = (formValues: EditFamilyFormValues) => {
    const { family_first_name, family_last_name } = formValues;

    const touchedObject = {
      family_first_name: family_first_name.length === 0,
      family_last_name: family_last_name.length === 0,
    };

    setTouched(touchedObject);
  };

  const handleOnFormSubmit = async () => {
    handleErrorStyles(values);
    const errors = await validateForm();

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      dispatch(setTimedStatusMessageType("Error"));
      dispatch(setTimedStatusMessageOccured(true));
    } else {
      handleSubmit();
      navigator.navigate("StudentsHome");
      dispatch(setTimedStatusMessageType("Success-Edit"));
      dispatch(setTimedStatusMessageOccured(true));
    }
  };

  const handleCancel = () => {
    resetForm();
    navigator.navigate("StudentsHome");
    dispatch(setTimedStatusMessageType("Canceled-Edit"));
    dispatch(setTimedStatusMessageOccured(true));
  };

  return (
    <View style={styles.saveOrCancelContainer}>
      <LinearGradient
        style={styles.saveButtonContainer}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleOnFormSubmit}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.cancelButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Finalization;
