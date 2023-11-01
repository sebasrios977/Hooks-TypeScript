import { useState } from "react";


export const useForm = (initialForm: any = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: any): void => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
}



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}