import styles from "./RegisterForm.module.css";

import { emailValidation, passwordValidation } from '../../../utils/shared';
import useInput from '../../../utils/shared/useInput';

import TextInput from "../TextInput/TextInput";
import ActionButton from '../../../UI/ActionButton/ActionButton';
import LinkButton from "../../../UI/LinkButton/LinkButton";

const RegisterForm = (props) => {

    const {
        value: emailValue,
        isValid: emailIsValid,
        isTouched: emailIsTouched,
        isBlur: emailIsBlur,
        onChange: onEmailChange,
        onBlur: onEmailBlur
    } = useInput(emailValidation);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        isTouched: passwordIsTouched,
        isBlur: passwordIsBlur,
        onChange: onPasswordChange,
        onBlur: onPasswordBlur
    } = useInput(passwordValidation);

    const {
        value: repeatPasswordValue,
        isValid: repeatPasswordIsValid,
        isTouched: repeatPasswordIsTouched,
        isBlur: repeatPasswordIsBlur,
        onChange: onRepeatPasswordChange,
        onBlur: onRepeatPasswordBlur
    } = useInput(passwordValidation);

    const emailHasError = (emailIsBlur && emailIsTouched) || emailIsBlur ? !emailIsValid : false;
    const passwordHasError = (passwordIsBlur && passwordIsTouched) || passwordIsBlur ? !passwordIsValid : false;
    const passwordsAreEquals =  repeatPasswordValue === passwordValue;
    const repeatPasswordHasError = (repeatPasswordIsBlur && repeatPasswordIsTouched) || repeatPasswordIsBlur ? !(repeatPasswordIsValid && passwordsAreEquals) : false;
    
    const isFormValid = emailIsValid && passwordIsValid && repeatPasswordIsValid && passwordsAreEquals;

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.onSubmit(emailValue, passwordValue);
    }

    return (
        <form onSubmit={onSubmitForm} className={styles.RegisterForm}>
            <TextInput
                label="Email"
                type="email"
                name="email"
                placeholder="Introduce tu Email"
                errorMessage="Introduce un email valido"
                value={emailValue}
                onBlur={onEmailBlur}
                onChange={onEmailChange} 
                hasError={emailHasError} />
            <TextInput
                label="Contraseña"
                type="password"
                name="password"
                placeholder="Introduce contraseña"
                errorMessage="Debe contener alguna minuscula, mayusculas, caracter especial y al menos ser de 6 caracteres"
                value={passwordValue}
                onBlur={onPasswordBlur}
                onChange={onPasswordChange}
                hasError={passwordHasError} />
            <TextInput
                label="Repite Contraseña"
                type="password"
                name="repeatPassword"
                placeholder="Repite tu contraseña"
                errorMessage="No coincide con tu contraseña"
                value={repeatPasswordValue}
                onBlur={onRepeatPasswordBlur}
                onChange={onRepeatPasswordChange}
                hasError={repeatPasswordHasError} />
            <ActionButton type="submit" disabled={!isFormValid}>Registrarse</ActionButton>
            <div className={styles.Login}>
                <span>Eres ya cliente?</span>
                <LinkButton type="button" onClick={props.onClickToLogin}>Incia sesion aqui</LinkButton>
            </div>
        </form>
    );
};

export default RegisterForm;