import React from "react";
import styled from "styled-components";
// components
import { 
    PageOne, PageTwo, 
    GuidePage, LoginPage 
} from "../components/first";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { PageNumState, VisitState } from "../states/website_atom";


const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(PageNumState);
    const isVisited = useRecoilValue(VisitState);

    // switch (pageNum) {
    //     case 1:
    //         return <PageTwo
    //                     setPageNum={setPageNum}
    //                 />
    //     case 2:
    //         if(isVisited.includes("아니요")){
    //             return <LoginPage/>
    //         }
    //         else{
    //             return <GuidePage/>
    //         }
    //     default:
    //         return <PageOne
    //                     setPageNum={setPageNum}
    //                 />
    // }

    switch (pageNum) {
        case 1:
            return <GuidePage/>
        default:
            return <PageOne
                        setPageNum={setPageNum}
                    />
    }
}

export default Start;