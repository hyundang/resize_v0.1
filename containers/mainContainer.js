import React, {useState} from 'react';
import Link from 'next/link';
import {OverlapBtn, ChoiceBtn, InputBox, CheckBox} from '../components/common';
import Header from "../components/Header";

const MainContainer = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Link href="/sizetest">체형 TEST</Link>
            <InputBox text={"요청사항을 입력하세요"} value={inputValue} setvalue={setInputValue}/>
            <CheckBox/>
            <Header kategorie={0} quesNum={1} lastQuesNum={10}/>
        </>
    );
};

export default MainContainer;