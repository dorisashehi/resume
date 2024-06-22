const Button = (props) => {
  return <input type="submit" onClick={props.onClick} className={props.className} value={props.value} />;
};

export default Button;
