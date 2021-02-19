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
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: first baseline;
    background-color: white;
    box-shadow: 0 0 1rem 1rem rgba(255,255,255,1); 
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
    width: 8rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: normal;
    color: ${props=> (props.num == props.kategorie)? ({theme})=>theme.colors.pale_brown : '#e8d7c1'}; 
    font-weight: ${props=> (props.num == props.kategorie)? '900' : '500'};
`;

const BarWrap = styled.div`
    position: relative;
    margin-top: 2.4rem;
    width: 97%;
    height: 0.7rem;
    border-radius: 0.5rem;
    background-color: #e6e6e6;
`;

const Bar = styled.div`
    position: relative;
    left: 0;
    z-index: 2;
    width: ${props=>(97/props.lastQuesNum)*props.quesNum}%;
    height: 0.7rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.colors.pale_brown};  
`;