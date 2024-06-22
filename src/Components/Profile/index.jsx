import { useState } from 'react';
import OtherLinks from '../OtherLinks';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faEnvelope, faPhoneVolume, faLocationDot, faPlus } from '@fortawesome/free-solid-svg-icons';

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

    if (['website', 'github', 'linkedin'].includes(field)) {
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
          <div className="sub-section">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  id="fullName"
                  value={profile.fullName}
                  onChange={(event) => changeProfile(event.target.id, event.target.value)}
                  placeholder="Enter Your First and Last Name"
                />
              </div>

              <div className="row-group">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={profile.email}
                    onChange={(event) => changeProfile(event.target.id, event.target.value)}
                  />
                  {errorMsg.email && <span className="email error">Incorrect Email format</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone"
                    value={profile.phone}
                    onChange={(event) => changeProfile(event.target.id, event.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-input"
                  name="location"
                  id="location"
                  placeholder="City, Country"
                  value={profile.location}
                  onChange={(event) => changeProfile(event.target.id, event.target.value)}
                />
              </div>

              <div className="form-group">
                <h3>Others</h3>

                <div className="links">
                  {Object.entries(othersLink).map(
                    ([key, value]) =>
                      !value && (
                        <div className="link_name" key={key} onClick={() => toggleField(key)}>
                          <FontAwesomeIcon icon={faPlus} />
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </div>
                      )
                  )}
                </div>

                {Object.entries(othersLink).map(
                  ([key, value]) =>
                    value && (
                      <OtherLinks
                        name={key}
                        key={key}
                        text={key.charAt(0).toUpperCase() + key.slice(1)}
                        removeField={removeField}
                        others={profile.others}
                        changeValue={changeProfile}
                      />
                    )
                )}
              </div>

              <div className="button-section">
                <input type="submit" className="btn close" onClick={(event) => toggleDetails(event)} value="Close" />
                <input type="submit" className="btn save" onClick={(event) => save(event)} value="Save" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
Profile.propTypes = {
  addProfile: PropTypes.func,
};

export default Profile;
