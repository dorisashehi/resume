import Button from '../Elements/Button';
import FormInput from '../Elements/Input';
import OtherLinks from '../OtherLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const UpdateForm = (props) => {
  return (
    <div className="sub-section">
      <div className="sub-section">
        <div className="sub-section">
          <form method="POST">
            <FormInput
              label="Full Name"
              type="text"
              className="form-input"
              name="name"
              id="fullName"
              value={props.profile.fullName}
              onChange={(event) => props.changeProfile(event.target.id, event.target.value)}
              placeholder="Enter Your First and Last Name"
            />
            <div className="row-group">
              <FormInput
                label="Email"
                type="email"
                className="form-input"
                name="email"
                id="email"
                value={props.profile.email}
                onChange={(event) => props.changeProfile(event.target.id, event.target.value)}
                placeholder="Enter Your First and Last Name"
              />
              <FormInput
                label="Phone"
                type="tel"
                className="form-input"
                name="phone"
                id="phone"
                value={props.profile.phone}
                onChange={(event) => props.changeProfile(event.target.id, event.target.value)}
                placeholder="Enter Phone"
              />
            </div>

            <div className="form-group">
              <FormInput
                label="Address"
                type="text"
                className="form-input"
                name="location"
                id="location"
                value={props.profile.location}
                onChange={(event) => props.changeProfile(event.target.id, event.target.value)}
                placeholder="City, Country"
              />
            </div>

            <div className="form-group">
              <h3>Others</h3>

              <div className="links">
                {Object.entries(props.othersLink).map(
                  ([key, value]) =>
                    !value && (
                      <div className="link_name" key={key} onClick={() => props.toggleField(key)}>
                        <FontAwesomeIcon icon={faPlus} />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    )
                )}
              </div>

              {Object.entries(props.othersLink).map(
                ([key, value]) =>
                  value && (
                    <OtherLinks
                      name={key}
                      key={key}
                      text={key.charAt(0).toUpperCase() + key.slice(1)}
                      removeField={props.removeField}
                      others={props.profile.others}
                      changeValue={props.changeProfile}
                    />
                  )
              )}
            </div>

            <div className="button-section">
              <div className="link_name">
                <FontAwesomeIcon icon={faMinus} />
                <Button value="Close" onClick={(event) => props.toggleDetails(event)} className="btn-simple close" />
              </div>
              <Button value="Update" onClick={(event) => props.save(event)} className="btn save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
