import React, { useEffect, useState } from "react";
// recoil
import { useRecoilState } from "recoil";
import { InvitationPageNumState } from "../states/invitation_atom";
// components
import { DefaultPage, PageOne, PageTwo } from '../components/invitation';
import { PC, Mobile } from "../lib/mediaQuery";
import { PreparePage, PreparePagePC } from "../components";
// head
import Head from 'next/head';

const Start = () => {
    let filter = "win16|win32|win64|mac|macintel";
    const [pageNum, setPageNum] = useRecoilState(InvitationPageNumState);
    const [isPC, setIsPC] = useState(true);

    // 접속 기기가 pc인지 확인
    useEffect(()=>{
      if(navigator.platform) {
        if(filter.indexOf(navigator.platform.toLowerCase())<0){
          setIsPC(false);
          console.log(isPC);
        }
      }
    }, [])
    

    if(isPC){
        return (
        <>
            <Head>
                <title>INVITATION</title>
                <meta name="title" property="og:title" content="INVIATION" />
                <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                <meta name="url" property="og:url" content="https://resize.co.kr/invitation" />
                <meta name="site_name" property="og:site_name" content="RESIZE" />
            </Head>
            <PC>
                <PreparePagePC/>
            </PC>
            <Mobile>
                <PreparePage/>
            </Mobile>
        </>
        )
    }
    else{
        switch(pageNum){
            case 1:
                return (
                    <>
                    <Head>
                        <title>INVITATION</title>
                        <meta name="title" property="og:title" content="INVIATION" />
                        <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                        <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                        <meta name="url" property="og:url" content="https://resize.co.kr/invitation" />
                        <meta name="site_name" property="og:site_name" content="RESIZE" />
                    </Head>
                    <PageOne setPageNum={setPageNum}/>
                    </>
                )
            case 2:
                return (
                    <>
                    <Head>
                        <title>INVITATION</title>
                        <meta name="title" property="og:title" content="INVIATION" />
                        <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                        <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                        <meta name="url" property="og:url" content="https://resize.co.kr/invitation" />
                        <meta name="site_name" property="og:site_name" content="RESIZE" />
                    </Head>
                    <PageTwo/>
                    </>
                )
            default:
                return (
                    <>
                    <Head>
                        <title>INVITATION</title>
                        <meta name="title" property="og:title" content="INVIATION" />
                        <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                        <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                        <meta name="url" property="og:url" content="https://resize.co.kr/invitation" />
                        <meta name="site_name" property="og:site_name" content="RESIZE" />
                    </Head>
                    <DefaultPage setPageNum={setPageNum}/>
                    </>
                )
        }
    }
}

export default Start;