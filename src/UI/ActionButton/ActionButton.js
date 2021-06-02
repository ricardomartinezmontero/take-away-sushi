import classes from "./ActionButton.module.css";

const ActionButton = (props) => {
    const styles = `${classes.ActionButton} ${props.className ? props.className : ""}`;
    const isDisabled = props.disabled ? props.disabled : false;
    const type = props.type ? props.type : "button";
    return (
        <button className={styles} type={type} onClick={props.onClick} disabled={isDisabled}>
            {props.children}
        </button>
    );
};

export default ActionButton;
