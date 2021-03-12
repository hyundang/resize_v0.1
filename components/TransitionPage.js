import React from "react";
import styled from "styled-components";
// recoil
import { useSetRecoilState } from "recoil";
import { KategorieState } from "../states/website_atom";


export default ({text_one, text_two, setPageNum, kategorie}) => {
    const setKategorie = useSetRecoilState(KategorieState);

    const handleClick = () =>{
        switch (kategorie) {
            case 0:
                setKategorie(0);
                break;
            case 1:
                setKategorie(1);
                break;
            case 2:
                setKategorie(2);
                break;
            case 3:
                setKategorie(3);
            default:
                break;
        }
        setPageNum(1);
    }

    return(
        <>
            <Wrap onClick={handleClick} 
                url={
                kategorie===0?
                "/images/website/style/style.png"
                : (kategorie===1? "/images/website/size/size.png"
                    : kategorie===2? "/images/website/cody/cody.png"
                        : "")
            }>
                <Title>STYLING ROOM</Title>
                <TextWrap>
                    <Text>{text_one}</Text>
                    <Text>{text_two}</Text>
                </TextWrap>
                <BottomText>탭해서 계속하기</BottomText>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${props=>props.url}) center center / cover;
`;

const Title = styled.div`
    position: absolute;
    top: 31%;
    left: 7%;
    @media screen and (min-width: 500px) {
        left: 10%;
    }
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
    left: 7%;
    @media screen and (min-width: 500px) {
        left: 10%;
    }
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
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 10.6rem;
    height: 2.4rem;
    font-size: 1.6rem;
    /* font-weight: bold; */
    letter-spacing: -0.04rem;
    color: ${({theme})=>theme.colors.white};
    /* background-color: black; */
`;