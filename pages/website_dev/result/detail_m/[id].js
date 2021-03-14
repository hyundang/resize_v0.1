import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { ResultPage, RerequestPage, BuySurveyPage } from "../../../../components/result";
// recoil
import { useRecoilValue } from "recoil";
import { DetailPageNumState } from "../../../../states/result_atom";


export default () => {
    const pageNum = useRecoilValue(DetailPageNumState);
    const [ID, setID] = useState(0);
    const {id} = router.query;

    // 페이지 새로고침 막기
    useEffect(()=>{
        window.addEventListener('beforeunload', (e)=>{
            e.preventDefault();
            e.returnValue='refresh';
        })
    },[])

    useEffect(()=>{
        if(id!==undefined){
            setID(id);
        }
    }, [id])

    switch (pageNum) {
        case 1:
            return <RerequestPage sex={'M'} id={ID}/>
        case 2:
            return <BuySurveyPage/>
        default:
            return <ResultPage sex={'M'} id={ID}/>
    }
}

