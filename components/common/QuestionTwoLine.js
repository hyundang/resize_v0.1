import React, { useEffect, useState } from "react";
import styled from "styled-components";


export default ({quesNum, quesTextOne, quesTextTwo, overlapText}) => {
    const [isShow, setIsShow] = useState(false);
    useEffect(()=>{
        if(overlapText !== undefined){
            setIsShow(true);
        }
    }, [])
    
    return(
        <Wrap>
            <QuesNum quesNum={quesNum}>Q{quesNum}.</QuesNum>
            <QuestTextWrap>
                <QuesText>{quesTextOne}</QuesText>
                <TextWrap>
                    <QuesText>{quesTextTwo}</QuesText>
                    <OverlapText isShow={isShow}>({overlapText})</OverlapText>
                </TextWrap>
            </QuestTextWrap>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    /* height: 11rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


const QuesNum = styled.div`
    display: ${props=>(props.quesNum===0)? 'none' : 'box'};
    height: 2.9rem;
    margin-bottom: 2.3rem;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.5px;
    color: ${({theme}) => theme.colors.pale_brown};
`;

const QuestTextWrap = styled.div`
    height: 5.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const QuesText = styled.div`
    height: 2.7rem;
    font-weight: bold;
    font-size: 1.75rem;
    letter-spacing: -0.45px;
    text-align: left;
    color: ${({theme}) => theme.colors.black};
`;

const TextWrap = styled.div`
    height: 2.7rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const OverlapText = styled.div`
    display: ${props=>props.isShow? 'box' : 'none'};
    margin-left: 0.3rem;
    font-size: 1.35rem;
    font-weight: bold;
    letter-spacing: -0.35px;
    text-align: left;
    color: #be9e78;
`;