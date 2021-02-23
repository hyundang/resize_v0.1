import React from "react";
import styled from "styled-components";
// components
import { Header } from "../../components";
import { InputBox, Question, OverlapBtnTwo } from "../../components/common";
// hooks
import useInput from "../../hooks/useInput";

const Start  = () => {
    // 5개 만들기
    const input = useInput("");

    return(
        <Wrap>
            <Header  kategorie={3} quesNum={1} lastQuesNum={1}/>
            <Question
                quesNum={0}
                quesText={"이름"}
                overlapText={"필수"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 홍길동"}
                value={input.value}
                setvalue={input.setValue}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"생년월일"}
                overlapText={"필수"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 2021.01.01"}
                value={input.value}
                setvalue={input.setValue}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"휴대폰 번호"}
                overlapText={"필수"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 01012345678"}
                value={input.value}
                setvalue={input.setValue}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"이메일"}
                overlapText={"필수"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) resize@gmail.com"}
                value={input.value}
                setvalue={input.setValue}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"인스타그램 계정"}
                overlapText={"선택"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) instagram"}
                value={input.value}
                setvalue={input.setValue}
            />
            <div style={{marginTop:'3.2rem'}}/>
        </Wrap>
    )
}

export default Start;

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;