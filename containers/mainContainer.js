import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {OverlapBtn, ChoiceBtn, InputBox, CheckBox} from '../components/common';
import { Bottom, RatioStep } from "../components";
import Header from "../components/Header";
import Router from 'next/router';

const MainContainer = () => {
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        Router.push('/sizetest/');
        }
    )
       
    return (
        <>
            <Header kategorie={0} quesNum={1} lastQuesNum={10}/>
            <Link href="/sizetest">체형 TEST</Link>
            <InputBox text={"요청사항을 입력하세요"} value={inputValue} setvalue={setInputValue}/>
            <CheckBox/>
            <RatioStep/>
            <Bottom/>
        </>
    );
};

export default MainContainer;