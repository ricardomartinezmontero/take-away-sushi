import React from "react";

import { Provider } from "react-redux";

import '../../styles/globals.css';

import { useStore } from '../store';

import Layout from '../hoc/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={useStore(pageProps.initialReduxState)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
