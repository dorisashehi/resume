import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import useChangeFields from './changeFields';

const useToggleSections = () => {
  //HOOK WHICH SAVES STATES TO OPEN, CLOSE SECTIONS IN WEBSITE

  const [addBox, setOpen] = useState(false); //STATE FOR ADD BOX
  const [editBox, setEdit] = useState(false); //STATE FOR EDIT BOX
  const [showSummany, setSummary] = useState(false); //STATE FOR SHOW SUMMARY BOX

  //const { setFieldsObj } = useChangeFields();
  const [id, setID] = useState();

  const [fields, setFieldsObj] = useState({}); //AN OBJ STATE TO SAVE FIELDS ADDED TO THE ADD BOX
  const [fieldsArr, setFieldsArr] = useState([]); //AN ARRAY STATE TO SAVE OBJECT WITH FIELDS ADDED

  const handleOpenSummary = () => {
    //OPEN CLOSE EXPERIENCE SUMMARY
    setSummary(!showSummany);
    setEdit(false);
    setOpen(false);
  };

  const toggleAdd = (event) => {
    //OPEN CLOSE DETAILS

    event.preventDefault();

    setID(uuidv4()); //GENERATE A RANDOM ID WHEN ADD BOX OPEN
    console.log(id);
    setFieldsObj({}); //EMPTY PREVIOUS FIELDS OBJECT
    setEdit(false);
    setOpen(!addBox); //OPEN/CLOSE ADD BOX
  };

  const toggleEdit = (event) => {
    //OPEN CLOSE EDIT BOX

    event.preventDefault();
    setEdit(!editBox); //OPEN/CLOSE EDIT BOX
  };

  return {
    addBox,
    setOpen,
    editBox,
    setEdit,
    showSummany,
    setSummary,
    handleOpenSummary,
    toggleAdd,
    fields,
    setFieldsObj,
    fieldsArr,
    setFieldsArr,
    fieldsArr,
    toggleEdit,
    id,
    setID,
  };
};

export default useToggleSections;
