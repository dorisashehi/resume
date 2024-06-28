import { useState } from 'react';

const useValidate = () => {
  const [required, setRequired] = useState(false); //REQUIRED FIELD

  const validateRequiredFields = (field) => {
    //CHECK IS REQ FIELD IS FILLED

    if (!field) {
      setRequired(true); //REQUIRED FIELD IS NOT FILLED
      return true;
    }

    setRequired(false); //REQUIRED FIELD IS FILLED
    return false;
  };

  return {
    required,
    validateRequiredFields,
  };
};

export default useValidate;
