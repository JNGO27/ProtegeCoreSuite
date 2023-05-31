import { supabaseConfig } from "@src/lib/supabaseConfig";

import type { StudentFormValues, EditStudentFormValues } from "@src/types";

import { convertToInt8 } from "@src/redux/helpers";

export const getAllStudentsDataQueryFn = {
  queryFn: async () => {
    const { data: studentData, error } = await supabaseConfig
      .from("Students_All_Data")
      .select(
        "student_data (id, first_name, last_name, phone_number, email_address, lesson_length, rate_per_time, rate, instrument, skill_level, gender, age), associated_family (parent_guardian_first_name_1, parent_guardian_last_name_1, phone_number, email_address)",
      );

    if (error) {
      throw new Error(error.message);
    }

    const data = studentData;

    return { data };
  },
  providesTags: [{ type: "Students" } as const],
};

export const getAllFamiliesDataQueryFn = {
  queryFn: async () => {
    const { data: studentData, error } = await supabaseConfig
      .from("Families")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    const data = studentData;

    return { data };
  },
  providesTags: [{ type: "Students" } as const],
};

export const insertStudentDataQueryFn = {
  queryFn: async (formValues: StudentFormValues) => {
    const studentData = [
      {
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        phone_number: formValues.phone_number,
        email_address: formValues.email,
        rate: formValues.rate,
        lesson_length: formValues.lesson_length,
        rate_per_time: formValues.rate_per_time,
        instrument: formValues.instrument,
        skill_level: formValues.skill_level,
        gender: formValues.gender,
        age: formValues.age,
      },
    ];

    const familyData = [
      {
        parent_guardian_first_name_1: formValues.family_first_name,
        parent_guardian_last_name_1: formValues.family_last_name,
        phone_number: formValues.family_phone_number,
        email_address: formValues.family_email,
      },
    ];

    const { data: newStudentId, error: studentsTableError } =
      await supabaseConfig.from("Students").insert(studentData).select("id");

    if (studentsTableError) {
      throw new Error(studentsTableError.message);
    }

    const { data: newFamilyId, error: familiesTableError } =
      await supabaseConfig.from("Families").insert(familyData).select("id");

    if (familiesTableError) {
      throw new Error(familiesTableError.message);
    }

    const newStudentAllData = [
      {
        student_data: convertToInt8(newStudentId[0].id),
        associated_family: convertToInt8(newFamilyId[0].id),
      },
    ];

    const { data, error } = await supabaseConfig
      .from("Students_All_Data")
      .insert(newStudentAllData);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [{ type: "Students" } as const],
};

export const insertStudentDataExistingFamilyQueryFn = {
  queryFn: async (formValues: StudentFormValues) => {
    const studentData = [
      {
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        phone_number: formValues.phone_number,
        email_address: formValues.email,
        rate: formValues.rate,
        lesson_length: formValues.lesson_length,
        rate_per_time: formValues.rate_per_time,
        instrument: formValues.instrument,
        skill_level: formValues.skill_level,
        gender: formValues.gender,
        age: formValues.age,
      },
    ];

    const { data: newStudentId, error: studentsTableError } =
      await supabaseConfig.from("Students").insert(studentData).select("id");

    if (studentsTableError) {
      throw new Error(studentsTableError.message);
    }

    const idExists = formValues.existing_family_id.length >= 1;
    const noFamilyName =
      formValues.family_first_name.length === 0 &&
      formValues.family_last_name.length === 0;
    let existingFamilyData: number | null = null;

    if (idExists && noFamilyName) {
      existingFamilyData = convertToInt8(formValues.existing_family_id);
    }

    const newStudentAllData = [
      {
        student_data: convertToInt8(newStudentId[0].id),
        associated_family: existingFamilyData,
      },
    ];

    const { data, error } = await supabaseConfig
      .from("Students_All_Data")
      .insert(newStudentAllData);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [{ type: "Students" } as const],
};

export const editStudentDataMutationQueryFn = {
  queryFn: async (formValues: EditStudentFormValues) => {
    const studentData = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      phone_number: formValues.phone_number,
      email_address: formValues.email,
      rate: formValues.rate,
      lesson_length: formValues.lesson_length,
      rate_per_time: formValues.rate_per_time,
      instrument: formValues.instrument,
      skill_level: formValues.skill_level,
      gender: formValues.gender,
      age: formValues.age,
    };

    const id = String(formValues.id);

    const { data, error } = await supabaseConfig
      .from("Students")
      .update(studentData)
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [{ type: "Students" } as const],
};
