import styles from "./LoginForm.module.css";

import { emailValidation, passwordValidation } from "../../../utils/shared";
import useInput from "../../../utils/shared/useInput";

import TextInput from "../TextInput/TextInput";
import ActionButton from '../../../UI/ActionButton/ActionButton';
import LinkButton from '../../../UI/LinkButton/LinkButton';


const LoginForm = (props) => {
    const {
        value: emailValue,
        isValid: emailIsValid,
        isTouched: emailIsTouched,
        isBlur: emailIsBlur,
        onChange: onEmailChange,
        onBlur: onEmailBlur,
    } = useInput(emailValidation);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        isTouched: passwordIsTouched,
        isBlur: passwordIsBlur,
        onChange: onPasswordChange,
        onBlur: onPasswordBlur,
    } = useInput(passwordValidation);

    const emailHasError =
        (emailIsBlur && emailIsTouched) || emailIsBlur ? 
            !emailIsValid : 
            false;
    const passwordHasError =
        (passwordIsBlur && passwordIsTouched) || passwordIsBlur
            ? !passwordIsValid
            : false;

    const isFormValid = emailIsValid && passwordIsValid;

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.onSubmit(emailValue, passwordValue);
    };

    return (
        <form onSubmit={onSubmitForm} className={styles.LoginForm}>
            <TextInput
                label="Correo Electronico"
                type="email"
                name="email"
                placeholder="Introduce tu email"
                errorMessage="Introduce un email valido"
                value={emailValue}
                onBlur={onEmailBlur}
                onChange={onEmailChange}
                hasError={emailHasError}
            />
            <TextInput
                label="Contraseña"
                type="password"
                name="password"
                placeholder="Introduce tu contraseña"
                errorMessage="Password incorrecto"
                value={passwordValue}
                onBlur={onPasswordBlur}
                onChange={onPasswordChange}
                hasError={passwordHasError}
            />
            <ActionButton type="submit" disabled={!isFormValid}>Iniciar Sesion</ActionButton>
            <div className={styles.Register}>
                <span>No tienes cuenta?</span>
                <LinkButton type="button" onClick={props.onClickToRegister} >Registrate aqui</LinkButton>
            </div>
        </form>
    );
};

export default LoginForm;
