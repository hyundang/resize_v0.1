import React from "react";
import styled from "styled-components";

export default ({children, setModalVisible}) => {
    return(
        <>
        <Background onClick={()=>setModalVisible(false)}/>
        <Wrap>
            <Btn onClick={()=>setModalVisible(false)}>×</Btn>
            {children}
        </Wrap>
        </>
    )
}

const Background = styled.div`
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 51;
    width: 90%;
    height: 75%;
    padding: 2.5rem 2rem;
    border-radius: 1.2rem;
    background-color: white;
    font-size: 1.4rem;
    line-height: 1.7;
    color: ${({theme})=>theme.colors.black};
    white-space: pre-line;
    overflow-y: scroll;
`;

const Btn = styled.div`
    right: 0px;
    top: 5px;
    position: fixed;
    width: 3rem;
    height: 3rem;
    font-size: 1.8rem;
    font-weight: bold;
`;