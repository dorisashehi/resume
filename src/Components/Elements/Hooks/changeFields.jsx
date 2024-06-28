import { useState } from 'react';

const useChangeFields = () => {
  const [fields, setFieldsObj] = useState({}); //AN OBJ STATE TO SAVE FIELDS ADDED TO THE ADD BOX
  const [fieldsArr, setFieldsArr] = useState([]); //AN ARRAY STATE TO SAVE OBJECT WITH FIELDS ADDED
  //const [id, setID] = useState(); //ID STATE FOR EVERY ITEM ADDED OR EDITED
  const { id, setID } = useChangeFields();

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
      ...fields,
      id: id,
      [input]: value,
    });
  };

  const findField = (id) => {
    //FIND FIELD WITH SPECIFIC ID
    return fieldsArr.find((item) => item.id === id);
  };

  return { fields, setFieldsObj, changeFormFields, findField };
};

export default useChangeFields;
