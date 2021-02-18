import React, {useState} from 'react';
import Link from 'next/link';
import {OverlapBtn, ChoiceBtn, InputBox, CheckBox, RatioStep} from '../components/common';
import { Bottom } from "../components";
import Header from "../components/Header";

const MainContainer = () => {
    const [inputValue, setInputValue] = useState('');

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