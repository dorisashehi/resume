import { useState } from 'react';

const useChangeFields = () => {
  const [fields, setFieldsObj] = useState({}); //AN OBJ STATE TO SAVE FIELDS ADDED TO THE ADD BOX
  const [fieldsArr, setFieldsArr] = useState([]); //AN ARRAY STATE TO SAVE OBJECT WITH FIELDS ADDED

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
      ...fields,
      [input]: value,
    });
  };

  const findField = (id) => {
    //FIND FIELD WITH ID
    return fieldsArr.find((item) => item.id === id);
  };

  const findIndex = () => {
    //FIND FIELD WITH INDEX
    return fieldsArr.findIndex((item) => item.id === fields.id);
  };

  const filterField = (id) => {
    //FIND FIELD WITH INDEX
    return fieldsArr.filter((item) => item.id !== id);
  };

  return { fields, setFieldsObj, fieldsArr, setFieldsArr, findField, findIndex, filterField, changeFormFields };
};

export default useChangeFields;
