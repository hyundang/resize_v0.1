import React, { useEffect, useState } from "react";
import styled from "styled-components";


export default ({quesNum, quesText, overlapText}) => {
    const [isShow, setIsShow] = useState(false);
    useEffect(()=>{
        if(overlapText !== undefined){
            setIsShow(true);
        }
    }, [])
    
    return(
        <>
        <Wrap>
            <QuesNum>Q{quesNum}</QuesNum>
            <QuesTextWrap>
                <QuesText>{quesText}</QuesText>
                <OverlapText isShow={isShow}>({overlapText})</OverlapText>
            </QuesTextWrap>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 32rem;
    height: 8.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


const QuesNum = styled.div`
    height: 2.9rem;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.5px;
    color: ${({theme}) => theme.colors.pale_brown};
`;

const QuesTextWrap = styled.div`
    height: 2.7rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const QuesText = styled.div`
    height: 2.7rem;
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: -0.45px;
    text-align: left;
    color: ${({theme}) => theme.colors.black};
`;

const OverlapText = styled.div`
    display: ${props=>props.isShow? 'box' : 'none'};
    margin-left: 0.3rem;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -0.35px;
    text-align: left;
    color: #be9e78;
`;