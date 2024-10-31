import "./button.scss";

const Button = ({ children, variant }) => {
  return <button className={`button small-text ${variant}`}>{children}</button>;
};

export default Button;
