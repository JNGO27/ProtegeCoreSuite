import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useInsertStudentDataMutation } from "@src/redux/services/supabaseAPI";

import type { StudentFormValues, FormikSubmit } from "@src/types";

import createStyleSheet from "./styles";

const AddStudent = () => {
  const [insertStudentData] = useInsertStudentDataMutation();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const formValues: StudentFormValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    family_first_name: "",
    family_last_name: "",
    family_phone_number: "",
    family_email: "",
    rate: "",
  };

  const handleStudentSubmit = async (values: StudentFormValues) => {
    await insertStudentData(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={formValues} onSubmit={handleStudentSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <View style={styles.innerContainer}>
              <TextInput
                style={styles.input}
                value={values.first_name}
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                placeholder="first_name"
              />
              <TextInput
                style={styles.input}
                value={values.last_name}
                onChangeText={handleChange("last_name")}
                onBlur={handleBlur("last_name")}
                placeholder="last_name"
              />
              <TextInput
                style={styles.input}
                value={values.phone_number}
                onChangeText={handleChange("phone_number")}
                onBlur={handleBlur("phone_number")}
                placeholder="phone_number"
              />
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="email"
              />
              <TextInput
                style={styles.input}
                value={values.family_first_name}
                onChangeText={handleChange("family_first_name")}
                onBlur={handleBlur("family_first_name")}
                placeholder="family_first_name"
              />
              <TextInput
                style={styles.input}
                value={values.family_last_name}
                onChangeText={handleChange("family_last_name")}
                onBlur={handleBlur("family_last_name")}
                placeholder="family_last_name"
              />
              <TextInput
                style={styles.input}
                value={values.family_phone_number}
                onChangeText={handleChange("family_phone_number")}
                onBlur={handleBlur("family_phone_number")}
                placeholder="family_phone_number"
              />
              <TextInput
                style={styles.input}
                value={values.family_email}
                onChangeText={handleChange("family_email")}
                onBlur={handleBlur("family_email")}
                placeholder="family_email"
              />
              <TextInput
                style={styles.input}
                value={values.rate}
                onChangeText={handleChange("rate")}
                onBlur={handleBlur("rate")}
                keyboardType="numeric"
                placeholder="rate"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit as FormikSubmit}
              >
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default AddStudent;
