import Head from 'next/head';
import { Provider } from "react-redux";

import "../../styles/globals.css";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import store from "../store";

import Layout from "../components/Layout/Layout";

import '../UI/Icons';

const stripePromise = loadStripe('pk_test_51Iyi2SHrq82N5ZjtrN7HrsebBPWnpka4tFNfd1BCy13W3MAN9oaae2xCyDFbcRGd6zxwfrt3aManIDLIpZeTI9mA000SqTtXxg');

const MyApp = ({ Component, pageProps }) => {
    const tittle = "Take Sushi Away";
    const description = "Asian food in Madrid";
    const imagePath = `${(typeof window !== 'undefined') ? window.location.origin : ''} //images//logo.png`;

    return (
        <Provider store={store}>
            <Head>
                <title>{tittle}</title>
                <meta name="description" content={tittle} />

                <meta itemProp="name" content={tittle} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content={imagePath} />

                <meta
                    property="og:url"
                    content="https://take-sushi-away.herokuapp.com"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={tittle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imagePath} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={tittle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imagePath} />
            </Head>
            <Layout>
                <Elements stripe={stripePromise}>
                    <Component {...pageProps} />
                </Elements>
            </Layout>
        </Provider>
    );
};

export default MyApp;
