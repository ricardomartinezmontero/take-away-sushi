import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Order from '../../components/Order/Order';

const OrderPage = () => {

    const isRenderedInClient = typeof window !== 'undefined';

    if (isRenderedInClient) {
        const router = useRouter();
        const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

        if (!isLoggedIn) {
            console.log("Order Page to Login");
            router.push('/login');
        }
    }

    return <Order />;
};

export default OrderPage;