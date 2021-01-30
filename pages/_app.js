import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
import {createStore} from 'redux';
import {RecoilRoot} from 'recoil';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const Resize = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
    <Provider store={store}>
      <Head>
        <title>Resize</title>
        <link rel="shortcut icon" href="/images/resizeLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Noto+Serif+KR:wght@200;300;400;500&display=swap" rel="stylesheet"/> 
      </Head>
        <Component />
    </Provider>
    </RecoilRoot>

  )
};

export default Resize;
