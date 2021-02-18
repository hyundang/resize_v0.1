import React from "react";
import styled from "styled-components";

export default ({text_one, text_two, setPageNum}) => {
    return(
        <>
            <Wrap>
                <Title>STYLING ROOM</Title>
                <TextWrap>
                    <Text>{text_one}</Text>
                    <Text>{text_two}</Text>
                </TextWrap>
                <BottomText onClick={()=>setPageNum(1)}>탭해서 계속하기</BottomText>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    /* background-image: */
`;

const Title = styled.div`
    position: absolute;
    top: 31%;
    left: 2.4rem;
    width: 22.7rem;
    height: 5.7rem;
    border-radius: 3.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.off_white};
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({theme})=>theme.colors.black};
`;

const TextWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 2.4rem;
    height: 8.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Text = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({theme})=>theme.colors.very_light_pink};
`;

const BottomText = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 10.5rem;
    height: 2.4rem;
    font-size: 1.6rem;
    letter-spacing: -0.4px;
    color: ${({theme})=>theme.colors.white};
    background-color: black;
`;