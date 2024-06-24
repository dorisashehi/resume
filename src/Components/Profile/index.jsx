import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faEnvelope, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import UpdateForm from './update';
function Profile(props) {
  const [edit, setEdit] = useState(false); //EDIT BUTTON STATE

  const toggleDetails = (event) => {
    //OPEN CLOSE DETAILS
    event.preventDefault();
    setEdit(!edit);
  };

  const [profile, setProfile] = useState({
    //PROFILE STATE DEFAULT VALUE EMPTY
    fullName: '',
    email: '',
    phone: '',
    location: '',
    others: {
      portfolio: '',
      github: '',
      linkedin: '',
    },
  });

  const [errorMsg, setError] = useState({
    //ERROR MESAGGES OBJECT
    email: false,
  });

  const testField = (regEX, input, value) => {
    //TEST BASED ON REG EX EXPRESION PASED

    let timer;
    clearTimeout(timer);
    setError({ ...errorMsg, [input]: false }); //SHOW ERROR TO THE SPECIFIC FIELD

    timer = setTimeout(() => {
      //VALIDATE AFTER SOME TIME
      if (!regEX.test(value) && value !== '') {
        setError({ ...errorMsg, [input]: true }); //UPDATE ERROR STATE
        return false;
      }
    }, 1000);
  };

  const validateFields = (input, value) => {
    //VALIDATE SPECIFIC FIELD BASED ON REGEX

    if (input === 'email') {
      let regEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      testField(regEX, input, value); //TEST EMAIL FIELD BASED ON REGEX
    }

    return true; //NOT ERRORS
  };

  const changeProfile = (input, value) => {
    //CHANGE INPUT FIELDS VALUES

    validateFields(input, value);

    const updatedProfile = {
      ...profile,
    };

    if (['portfolio', 'github', 'linkedin'].includes(input)) {
      //IF PROFILE OTHERS OBJECT IS MODIFIED

      updatedProfile.others = {
        ...profile.others,
        [input]: value,
      };
    } else {
      //ELSE MODIFIED DIRECTED FIELDS OF PROFILE

      updatedProfile[input] = value;
    }

    setProfile(updatedProfile); //UPDATE PROFILE
  };

  const [othersLink, setOpenLink] = useState({
    //EDIT BUTTON STATE
    portfolio: false,
    github: false,
    linkedin: false,
  });

  const toggleField = (field) => {
    //TOGGLE FIELDS BASED ON THEIR STATE
    setOpenLink({ ...othersLink, [field]: !othersLink[field] });
  };
  const removeField = (field) => {
    //REMOVE FORM FIELDS FOR LINKS ON CLICK REMOVE ICON

    if (['portfolio', 'github', 'linkedin'].includes(field)) {
      toggleField(field);
    }

    const updatedProfile = {
      ...profile,
    };

    updatedProfile.others = {
      ...profile.others,
      [field]: '',
    };

    //UPDATE THE PROFILE OBJECT
    setProfile(updatedProfile);

    //UPDATE THE PARENT OBJECT PROFILE
    props.addProfile(updatedProfile);
  };

  const save = (event) => {
    event.preventDefault();

    props.addProfile(profile); //UPDATE CV PROFILE
    setEdit(false);
  };

  return (
    <>
      <div className="personal-section section-presentation  row" onClick={toggleDetails}>
        <div className="edit-icon">
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <h1 className="name">{profile?.fullName || 'Your name'}</h1>
        {/* <div className="position">
                    { (profile.location !== '') ? profile.location : 'Adress' }
                </div> */}
        <ul className="personal-info">
          <li className="item">
            <FontAwesomeIcon icon={faEnvelope} />
            {profile?.email || 'Email'}
          </li>
          <li className="item">
            <FontAwesomeIcon icon={faPhoneVolume} />
            {profile?.phone || 'Phone'}
          </li>
          <li className="item">
            <FontAwesomeIcon icon={faLocationDot} />
            {profile?.location || 'Address'}
          </li>
        </ul>
      </div>

      {edit && (
        <div className="personal-details-section row details">
          <h1>Edit Personal Details</h1>
          <UpdateForm
            changeProfile={changeProfile}
            profile={profile}
            othersLink={othersLink}
            toggleField={toggleField}
            removeField={removeField}
            save={save}
          />
        </div>
      )}
    </>
  );
}
Profile.propTypes = {
  addProfile: PropTypes.func,
};

export default Profile;
