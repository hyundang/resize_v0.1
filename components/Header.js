import React from "react";
import styled from 'styled-components';


// lastQuesNum: 질문 총 개수
// quesNum: 현재 질문 넘버
// kategorie: 스타일/체형/코디/마무리
export default ({kategorie, quesNum, lastQuesNum}) => {
    return(
        <>
        <Wrap>
            <TypeWrap>
                <TypeText num={0} kategorie={kategorie}>스타일</TypeText>
                <TypeText num={1} kategorie={kategorie}>체형</TypeText>
                <TypeText num={2} kategorie={kategorie}>코디</TypeText>
                <TypeText num={3} kategorie={kategorie}>마무리</TypeText>
            </TypeWrap>
            <BarWrap>
                <Bar quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            </BarWrap>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TypeWrap = styled.div`
    width: 100%;
    height: 2.3rem;
    margin-top: 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const TypeText = styled.div`
    cursor: pointer;
    width: 4.6rem;
    height: 2.3rem;
    font-size: 1.4rem;
    font-weight: normal;
    color: ${props=> (props.num == props.kategorie)? ({theme})=>theme.colors.pale_brown : '#e8d7c1'}; 
    font-weight: ${props=> (props.num == props.kategorie)? '900' : '500'};
`;

const BarWrap = styled.div`
    position: relative;
    margin-top: 2.4rem;
    width: 36.5rem;
    height: 0.7rem;
    border-radius: 0.5rem;
    background-color: #e6e6e6;
`;

const Bar = styled.div`
    position: relative;
    left: 0;
    z-index: 2;
    width: ${props=>(36.5/props.lastQuesNum)*props.quesNum}rem;
    height: 0.7rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.colors.pale_brown};  
`;