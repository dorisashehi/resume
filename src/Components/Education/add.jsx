const AddForm = () => {
  return (
    <div className="sub-section">
      <form>
        <FormInput
          label="School"
          type="text"
          className="form-input"
          name="school"
          id="school"
          required={required}
          onChange={(event) => changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter School"
        />
        <FormInput
          label="Degree"
          type="text"
          className="form-input"
          name="degree"
          id="degree"
          onChange={(event) => changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Degree"
        />
        <div className="row-group">
          <FormInput
            label="City"
            type="text"
            className="form-input"
            name="edu_city"
            id="edu_city"
            onChange={(event) => changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter City"
          />

          <FormInput
            label="Country"
            type="text"
            className="form-input"
            name="edu_country"
            id="edu_country"
            onChange={(event) => changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Country"
          />
        </div>

        <div className="row-group">
          <FormInput
            label="Start Date"
            type="date"
            className="form-input"
            name="schl_start_date"
            id="schl_start_date"
            onChange={(event) => changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="date"
            className="form-input"
            name="schl_end_date"
            id="schl_end_date"
            onChange={(event) => changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter End Date"
          />
        </div>

        <div className="button-section">
          <Button value="Close" onClick={(event) => toggleAdd(event)} className="btn close" />
          <Button value="Save" onClick={(event) => save(event)} className="btn save" />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
