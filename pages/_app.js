import React, {useEffect, useState} from 'react';
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
import "swiper/swiper.scss";
import 'swiper/components/pagination/pagination.scss';
import { Mobile, PC } from "../lib/mediaQuery";
import { PreparePage } from "../components";


const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const Resize = ({ Component, pageProps }) => {
  let filter = "win16|win32|win64|mac|macintel";
  
  const [isPC, setIsPC] = useState(false);

  useEffect(()=>{
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  )

  // 접속 기기가 pc인지 확인
  // useEffect(()=>{
  //   if(navigator.platform) {
  //     if(filter.indexOf(navigator.platform.toLowerCase())<0){
  //       setIsPC(false);
  //       console.log(isPC);
  //     }
  //   }
  // }, [])

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
        {isPC?
          <PC>
            <PreparePage/>
          </PC>
        : <Component {...pageProps}/>
        }
      </Provider>
    </RecoilRoot>
    </ThemeProvider>
  )
};

export default Resize;
