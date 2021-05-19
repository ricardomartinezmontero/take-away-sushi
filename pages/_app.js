import React from "react";

import { Provider } from "react-redux";

import '../styles/globals.css'

import Layout from '../src/hoc/Layout/Layout';

import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
