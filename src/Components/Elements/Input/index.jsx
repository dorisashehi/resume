const FormInput = ({ label, type, value, onChange, className, name, id, placeholder, required = false }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {required && <span className="error">That is a required field</span>}
    </div>
  );
};
export default FormInput;
