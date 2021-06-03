import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import OrderList from "../../components/OrderList/OrderList";

const MyOrderListPage = () => {
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        router.push('/login');
    }

    return <OrderList />;
};

export default MyOrderListPage;