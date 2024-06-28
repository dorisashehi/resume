import { useState } from 'react';
import useChangeFields from './changeFields';

const useToggleSections = () => {
  //HOOK WHICH SAVES STATES TO OPEN, CLOSE SECTIONS IN WEBSITE

  const [addBox, setOpen] = useState(false); //STATE FOR ADD BOX
  const [editBox, setEdit] = useState(false); //STATE FOR EDIT BOX
  const [showSummany, setSummary] = useState(false); //STATE FOR SHOW SUMMARY BOX
  const { setFieldsObj } = useChangeFields();

  const handleOpenSummary = () => {
    //OPEN CLOSE EXPERIENCE SUMMARY
    setSummary(!showSummany);
    setEdit(false);
    setOpen(false);
  };

  const toggleAdd = (event) => {
    //OPEN CLOSE DETAILS

    event.preventDefault();
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
    toggleEdit,
  };
};

export default useToggleSections;
