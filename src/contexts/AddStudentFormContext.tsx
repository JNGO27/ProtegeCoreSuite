import { createContext, useContext, useMemo, useState } from "react";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { FormikHandlers, FormikHelpers } from "formik";

import type { StudentFormValues, StyleSheetProps } from "@src/types";

interface FormProps {
  values: StudentFormValues;
  styles: StyleSheetProps;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  setFieldValue: FormikHelpers<StudentFormValues>["setFieldValue"];
}

interface CompleteFormProps extends FormProps {
  chosenExistingFamily: string;
  setChosenExistingFamily: Dispatch<SetStateAction<string>>;
}

interface ContextProps extends FormProps {
  children: ReactNode;
}

const Context = createContext<CompleteFormProps>({} as CompleteFormProps);

export const AddStudentFormContext = ({
  values,
  styles,
  handleChange,
  handleBlur,
  setFieldValue,
  children,
}: ContextProps) => {
  const [chosenExistingFamily, setChosenExistingFamily] = useState("");

  const conextValue = useMemo(
    () => ({
      values,
      styles,
      handleChange,
      handleBlur,
      setFieldValue,
      chosenExistingFamily,
      setChosenExistingFamily,
    }),
    [
      chosenExistingFamily,
      handleBlur,
      handleChange,
      setFieldValue,
      styles,
      values,
    ],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useAddStudentFormContext = () => useContext(Context);