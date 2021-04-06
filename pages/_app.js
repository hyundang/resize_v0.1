import React, {useEffect, useState} from 'react';
import '../styles/globals.css';
import { initGA, logPageView } from '../ga/analytics'
import Head from 'next/head';
// redux
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
import {createStore} from 'redux';
// recoil
import {RecoilRoot} from 'recoil';
// theme
import { ThemeProvider } from 'styled-components';
import theme from '../assets/themes';
// swiper
import "swiper/swiper.scss";
import 'swiper/components/pagination/pagination.scss';
// mediaquery
import { Mobile, PC } from "../lib/mediaQuery";
import { PreparePage, PreparePagePC } from "../components";


const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const Resize = ({ Component, pageProps }) => {
  let filter = "win16|win32|win64|mac|macintel";
  
  const [isPC, setIsPC] = useState(true);


  useEffect(()=>{
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  )

  // 접속 기기가 pc인지 확인
  useEffect(()=>{
    if(navigator.platform) {
      if(filter.indexOf(navigator.platform.toLowerCase())<0){
        setIsPC(false);
        console.log(isPC);
      }
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <RecoilRoot>
      <Provider store={store}>
        <Head>
          <title>Resize</title>
          <link rel="shortcut icon" href="/images/resizeLogo.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Noto+Serif+KR:wght@200;300;400;500&display=swap&family=Nanum+Myeongjo:wght@400;700&display=swap" rel="stylesheet"/> 
          <meta name="title" property="og:title" content="RESIZE" />
          <meta name="description" property="og:description" content="오직 나만을 위한 모바일 퍼스널 쇼퍼"/>
          <meta name="image" property="og:image" content="/images/website/ogtag2.png" />
          <meta property="og:url" content="https://resize.co.kr" />
          <meta property="og:site_name" content="RESIZE" />
        </Head>
        {isPC?
        <>
          <PC>
            <PreparePagePC/>
          </PC>
          <Mobile>
            <PreparePage/>
          </Mobile>
        </>
        : <Component {...pageProps}/>
        }
      </Provider>
    </RecoilRoot>
    </ThemeProvider>
  )
};

export default Resize;
