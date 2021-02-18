import React from "react";
import styled from "styled-components";
import { Question } from ".";

export default ({quesNum, quesText}) => {
    return(
        <>
        <Wrap>
            <QuesNum>Q{quesNum}</QuesNum>
            <QuesText>{quesText}</QuesText>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    margin-left: 2.4rem;
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

const QuesText = styled.div`
    height: 2.7rem;
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: -0.45px;
    text-align: left;
    color: ${({theme}) => theme.colors.black};
`;
