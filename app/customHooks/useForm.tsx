import { useState, useEffect } from "react";

interface IForm {
  [key: string]: string;
}
export default () => {
  // const [form, setForm] = useState<IForm>({});
  const [errors, setErrors] = useState<IForm>({});
  const [fieldError, setFieldError] = useState({});
  const initialFormState: IForm = {
    name: "",
    company: "",
    website: "",
    email: "",
    userType: "",
    step: "step1",
  };
  const [formState, updateFormState] = useState<IForm>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [visitingName, setVisitingName] = useState<string>("");
  // ~~~~~~
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormState(() => ({
      ...formState,
      [name]: value,
    }));
  };
  // ~~~~~~
  const handleClick = (step: string, HRorWantAWebSite: string) => {
    updateFormState(() => ({
      ...formState,
      userType: HRorWantAWebSite,
      step,
    }));
    setVisitingName(() => formState.name);
    console.log("HANLDECLIK", formState, visitingName);
  };

  return {
    handleChange,
    handleClick,
    formState,
    name: visitingName,
    errors,
    submitted,
    setSubmitted,
  };
};
