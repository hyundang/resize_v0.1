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
                    <meta name="title" property="og:title" content="INVIATION" />
                    <meta name="description" property="og:description" content="to the exclusive VIP personal shopper"/>
                    <meta name="image" property="og:image" content="/images/website/resize-ogtag2.png" />
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
                </Head>
                <DefaultPage setPageNum={setPageNum}/>
                </>
            )
    }
}

export default Start;