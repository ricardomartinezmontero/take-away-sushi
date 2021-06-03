import { useEffect, useState } from 'react';

const useRouteTransition = (router) => {

    const [isRouteChangeStart, setIsRouteChangeStart] = useState(false);

    const onRouteChangeStartHandler = () => {
        setIsRouteChangeStart(true);
    };

    const onRouteChangeEndHandler = () => {
        setIsRouteChangeStart(false);
    };

    useEffect(() => {
        router.events.on('routeChangeStart', onRouteChangeStartHandler);
        router.events.on('routeChangeComplete', onRouteChangeEndHandler);
        router.events.on('routeChangeError', onRouteChangeEndHandler);
        return () => {
            router.events.off('routeChangeStart', onRouteChangeStartHandler);
            router.events.off('routeChangeComplete', onRouteChangeEndHandler);
            router.events.off('routeChangeError', onRouteChangeEndHandler);
        }
    }, []);

    return {
        isRouteChangeStart
    };
};

export default useRouteTransition;