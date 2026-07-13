const Button = ({ text = "Tıkla", color = "blue" }) => {
  return <button style={{ color: color }}>{text}</button>;
};

export default Button;
