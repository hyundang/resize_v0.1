import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header } from "../../components";
import { InputBox, Question } from "../../components/common";
// hooks
import useInput from "../../hooks/useInput";
// router
import { useRouter } from "next/router";


export default () => {
    // 5개 만들기
    const input = useInput("");

    const router = useRouter();
    const handleClick = () => {
        // 스타일링 끝내기 눌렀을 때
        router.push('/website_dev/result');
    }

    return(
        <Wrap>
            <Header  kategorie={3} quesNum={1} lastQuesNum={1}/>
            <Question
                quesNum={0}
                quesText={"이름"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 홍길동"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"생년월일"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 2021.01.01"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"휴대폰 번호"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 01012345678"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"이메일"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) resize@gmail.com"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"인스타그램 계정"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) instagram"}
                input={input}
            />
            <div style={{marginTop:'3.6rem'}}/>
            <Bottom onClick={handleClick}>스타일링 끝내기</Bottom>
        </Wrap>
    )
}


const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 8.6rem;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.off_white};
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    letter-spacing: -0.4px;

`;