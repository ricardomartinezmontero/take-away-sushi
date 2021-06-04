import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Login from "../../components/Login/Login";
import Spinner from "../../UI/Spinner/Spinner";

const LoginPage = () => {
    
    const isRenderedInClient = typeof window !== 'undefined';
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isRenderedInClient) {
        const router = useRouter();
        if (isLoggedIn){
            router.back();
        }
    }

    return !isLoggedIn ? <Login /> : <Spinner />;
};

export default LoginPage;
