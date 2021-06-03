import { useEffect, useState } from 'react';

const useRouteTransition = (router) => {

    const [isRouteChangeStart, setIsRouteChangeStart] = useState(false);

    const onRouteChangeStartHandler = () => {
        setIsRouteChangeStart(true);
    };

    const onRouteChangeEndHandler = (url) => {
        console.log(url);
        setIsRouteChangeStart(false);
    };

    useEffect(() => {
        router.events.on('routeChangeStart', onRouteChangeStartHandler);
        router.events.on('routeChangeComplete', onRouteChangeEndHandler);
        router.events.on('routeChangeError', onRouteChangeEndHandler);
        return () => {
            console.log("clean all.")
            router.events.off('routeChangeStart', onRouteChangeStartHandler);
            router.events.off('routeChangeComplete', onRouteChangeEndHandler);
            router.events.on('routeChangeError', onRouteChangeEndHandler);
        }
    }, []);

    return {
        isRouteChangeStart
    };
};

export default useRouteTransition;