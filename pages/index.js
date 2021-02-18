import React from 'react';
import MainContainer from '../containers/mainContainer';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"/>
      </Head>
      <MainContainer/>
    </>
  )
}
