import React, {useEffect} from 'react';
import '../styles/globals.css';
import { initGA, logPageView } from '../ga/analytics'
import Head from 'next/head';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
import {createStore} from 'redux';
import {RecoilRoot} from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/themes';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const Resize = ({ Component, pageProps }) => {
  useEffect(()=>{
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  )
  return (
    <ThemeProvider theme={theme}>
    <RecoilRoot>
      <Provider store={store}>
        <Head>
          <title>Resize</title>
          <link rel="shortcut icon" href="/images/resizeLogo.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Noto+Serif+KR:wght@200;300;400;500&display=swap&family=Nanum+Myeongjo:wght@400;700&display=swap" rel="stylesheet"/> 
          <meta name="title" property="og:title" content="체형 유형 테스트" />
          <meta name="description" property="og:description" content="나와 비슷한 체형의 동물이 존재한다구? 나도 몰랐던 체형유형과 이에 맞는 찰떡 코디 추천까지!"/>
          <meta name="image" property="og:image" content="/images/sizetest/preview.png" />
        </Head>
          <Component />
      </Provider>
    </RecoilRoot>
    </ThemeProvider>
  )
};

export default Resize;
