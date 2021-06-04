import { useEffect, useState } from "react";

import styles from "./Login.module.css";

import { facebookLogin, emailLogin, register } from '../../store/actions/auth';

import LoginForm from "../../components/Form/LoginForm/LoginForm";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import FacebookLogin from "../../components/Form/FacebookButton/FacebookButton";
import { useDispatch } from "react-redux";

const Login = () => {

    const dispatch = useDispatch();

    const [showLogin, setShowLogin] = useState(true);

    const setToLogin = (event) => setShowLogin(true);
    const setToRegister = (event) => setShowLogin(false);

    const onFacebookLogin = async (event) => {
        dispatch(facebookLogin());
    };

    const onRegisterUser = (email, password) => {
        dispatch(register(email, password));
    };

    const onEmailLogin = (email, password) => {
        dispatch(emailLogin(email, password));
    }

    const form = showLogin ? (
        <section className={styles.LoginSection}>
            <FacebookLogin onClick={onFacebookLogin} />
            <div className={styles.LoginSeparation}>
                <div></div>
                <span>O</span>
                <div></div>
            </div>
            <header>Inicia Sesion</header>
            <LoginForm onSubmit={onEmailLogin} onClickToRegister={setToRegister} />
        </section>
    ) : (
        <section className={styles.LoginSection}>
            <header>Registrate</header>
            <RegisterForm onSubmit={onRegisterUser} onClickToLogin={setToLogin} />
        </section>
    );

    return (
        <div className={styles.Login}>
            {form}
        </div>
    );
};

export default Login;
