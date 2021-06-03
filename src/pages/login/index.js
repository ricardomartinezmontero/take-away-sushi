import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Login from "../../components/Login/Login";

const LoginPage = () => {

    const router = useRouter();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isLoggedIn){
        router.back();
    }

    return <Login />;
};

export default LoginPage;
