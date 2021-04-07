import React, {useState, useEffect} from "react";
import styled from "styled-components";
// components
import { 
    PageOne, PageTwo, 
    GuidePage, LoginPage,
    PolicyPage, InformPage, 
} from "../components/first";
import { PC, Mobile } from "../lib/mediaQuery";
import { PreparePage, PreparePagePC } from "../components";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { PageNumState, VisitState } from "../states/website_atom";


const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(PageNumState);
    const isVisited = useRecoilValue(VisitState);


    let filter = "win16|win32|win64|mac|macintel";
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

    // switch (pageNum) {
    //     case 1:
    //         return <PolicyPage/>
    //     case 2:
    //         return <InformPage/>
    //     case 3:
    //         return <GuidePage/>
    //     default:
    //         return <PageOne
    //                     setPageNum={setPageNum}
    //                 />
    // }
    if(isPC){
        return (
        <>
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
        <></>
    }
}

export default Start;