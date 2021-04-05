import React, { useEffect, useState } from "react";
import styled from 'styled-components';

export default ({setIsOpen, text}) => {
    
    return(
        <>
            <Wrap onClick={()=>setIsOpen(false)}/>
            <ModalWrap>
                <Text>{text}</Text>
                <Btn onClick={()=>setIsOpen(false)}>확인</Btn>
            </ModalWrap>
        </>
    )
}

const Wrap = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;
    
    width: 100vw;
    height: 100vh;
    opacity: 0.76;
    background-color: ${({theme})=>theme.colors.black};
`;

const ModalWrap = styled.div`
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 32rem;
    height: 16rem;
    border-radius: 0.8rem;
    background-color: ${({theme})=>theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    width: 32rem;
    height: 2.4rem;
    margin-top: 3.9rem;
    margin-bottom: 2.7rem;

    color: ${({theme})=>theme.colors.black};
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.19;
    letter-spacing: -0.4px;
    text-align: center;
`;

const Btn = styled.div`
    width: 10.6rem;
    height: 3.6rem;
    padding: 0.8rem 4rem;
    border-radius: 0.4rem;
    background-color: ${({theme})=>theme.colors.black};

    color: ${({theme})=>theme.colors.white};
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.35px;
    text-align: center;
`;