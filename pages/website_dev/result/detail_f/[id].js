import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { ResultPage, RerequestPage, BuySurveyPage } from "../../../../components/result";
// recoil
import { useRecoilValue } from "recoil";
import { DetailPageNumState } from "../../../../states/result_atom";
// router
import { useRouter } from "next/router";


export default () => {
    const pageNum = useRecoilValue(DetailPageNumState);
    const router = useRouter();
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
            return <RerequestPage sex={'F'} id={ID}/>
        case 2:
            return <BuySurveyPage/>
        default:
            return <ResultPage sex={'F'} id={ID}/>
    }
}

