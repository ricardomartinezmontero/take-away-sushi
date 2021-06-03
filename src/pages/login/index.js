import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Login from "../../components/Login/Login";

const LoginPage = () => {
    
    const isRenderedInClient = typeof window !== 'undefined';

    if (isRenderedInClient) {
        const router = useRouter();
        const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

        if (isLoggedIn){
            router.back();
        }
    }

    return isRenderedInClient ? <Login /> : null;
};

export default LoginPage;
