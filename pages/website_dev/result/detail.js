import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { ResultPage, RerequestPage, BuySurveyPage } from "../../../components/result";
// recoil
import { useRecoilValue } from "recoil";
import { DetailPageNumState } from "../../../states/result_atom";


export default () => {
    const pageNum = useRecoilValue(DetailPageNumState);
    
    // 페이지 새로고침 막기
    useEffect(()=>{
        window.addEventListener('beforeunload', (e)=>{
            e.preventDefault();
            e.returnValue='refresh';
        })
    },[])

    switch (pageNum) {
        case 1:
            return <RerequestPage/>
        case 2:
            return <BuySurveyPage/>
        default:
            return <ResultPage/>
    }
}

