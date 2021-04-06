import React from "react";
// recoil
import { useRecoilState } from "recoil";
import { InvitationPageNumState } from "../states/invitation_atom";
// components
import { DefaultPage, PageOne, PageTwo } from '../components/invitation';
// head
import Head from 'next/head';

const Start = () => {
    const [pageNum, setPageNum] = useRecoilState(InvitationPageNumState);

    switch(pageNum){
        case 1:
            return (
                <>
                <Head>
                    <title>INVITATION</title>
                    <link rel="shortcut icon" href="/images/resizeLogo.png" />
                    <meta name="title" property="og:title" content="INVIATION" />
                    <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                    <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                    <meta property="og:url" content="https://resize.co.kr/invitation" />
                    <meta property="og:site_name" content="RESIZE" />
                </Head>
                <PageOne setPageNum={setPageNum}/>
                </>
            )
        case 2:
            return (
                <>
                <Head>
                    <title>INVITATION</title>
                    <link rel="shortcut icon" href="/images/resizeLogo.png" />
                    <meta name="title" property="og:title" content="INVIATION" />
                    <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                    <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                    <meta property="og:url" content="https://resize.co.kr/invitation" />
                    <meta property="og:site_name" content="RESIZE" />
                </Head>
                <PageTwo/>
                </>
            )
        default:
            return (
                <>
                <Head>
                    <title>INVITATION</title>
                    <link rel="shortcut icon" href="/images/resizeLogo.png" />
                    <meta name="title" property="og:title" content="INVIATION" />
                    <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                    <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
                    <meta property="og:url" content="https://resize.co.kr/invitation" />
                    <meta property="og:site_name" content="RESIZE" />
                </Head>
                <DefaultPage setPageNum={setPageNum}/>
                </>
            )
    }
}

export default Start;