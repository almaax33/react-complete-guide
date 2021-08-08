import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
