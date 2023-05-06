import { View, TextInput } from "react-native";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";

import globalStyles from "@src/globalStyles";

const {
  colors: { purples },
} = globalStyles;

const FamilyDetails = () => {
  const { values, handleChange, handleBlur, styles } =
    useAddStudentFormContext();

  return (
    <View style={styles.formSection}>
      <TextInput
        style={styles.input}
        value={values.family_first_name}
        onChangeText={handleChange("family_first_name")}
        onBlur={handleBlur("family_first_name")}
        placeholder="Parent First Name *"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={styles.input}
        value={values.family_last_name}
        onChangeText={handleChange("family_last_name")}
        onBlur={handleBlur("family_last_name")}
        placeholder="Parent Last Name *"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={styles.input}
        value={values.family_phone_number}
        onChangeText={handleChange("family_phone_number")}
        onBlur={handleBlur("family_phone_number")}
        placeholder="Parent Phone Number"
        keyboardType="numeric"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={styles.input}
        value={values.family_email}
        onChangeText={handleChange("family_email")}
        onBlur={handleBlur("family_email")}
        placeholder="Parent Email"
        selectionColor={purples.purple100}
      />
    </View>
  );
};

export default FamilyDetails;
