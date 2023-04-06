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
  // useEffect(() => {
  //   if (errors) {
  //     for (const item in errors) {
  //       setFieldError((prevState) => ({
  //         ...prevState,
  //         [item]: errors[item],
  //       }));
  //     }
  //   }
  // }, [errors]);

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
    updateFormState(() => ({ ...formState, userType: HRorWantAWebSite, step }));
  };
  // ~~~~~~
  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  //   // option: string
  // ) => {
  //   e.preventDefault();
  //   const { name, company, website, email, userType } = formState;
  //   if (userType === "HR") {
  //   }
  //   if (userType === "want a website") {
  //   }
  //   //send an email to me with coordinates collected

  //   console.log("e", e);

  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return {
    handleChange,
    handleClick,
    formState,
    errors,
    submitted,
    setSubmitted,
  };
};
