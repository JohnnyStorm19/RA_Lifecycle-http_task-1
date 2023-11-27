import { useState } from "react";
import { IForm, IFormSubmit } from "../models";
import { v4 as uuidv4 } from "uuid";

export function useClockForm(onFormSubmit: IFormSubmit) {
  const uniqueKey = uuidv4();
  const [formData, setFormData] = useState<IForm>({
    timezone: "3",
    text: "",
    key: uniqueKey,
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    onFormSubmit([formData]);

    setFormData({
      timezone: "3",
      text: "",
      key: uuidv4(),
    }); // ? правильно ли очищаю стэйт?

    console.log("after submit: ", formData);
  };

  return {handleInputChange, handleSelectChange, submitHandler, formData }
}
