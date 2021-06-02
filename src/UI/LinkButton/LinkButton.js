import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
    const styles = `${classes.LinkButton} ${props.className ? props.className : ""}`;
    const isDisabled = props.disabled ? props.disabled : false;
    const type = props.type ? props.type : "button";
    return (
        <button className={styles} type={type} onClick={props.onClick} disabled={isDisabled}>
            {props.children}
        </button>
    );
};

export default LinkButton;