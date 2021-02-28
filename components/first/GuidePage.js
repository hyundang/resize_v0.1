import React from "react";
import styled from "styled-components";
// router
import { useRouter } from "next/router";


export default () => {
    const router = useRouter();

    return(
        <Wrap onClick={()=>router.push('/website_dev/style')}>
            <InnerWrap>
            <Title>리사이즈 이용 가이드</Title>
            <Img/>
            <div style={{height:'11.7rem',position:'relative',top:'7%'}}>
                <Text big={true}>스타일링룸이란?</Text>
                <div style={{height:'3.5rem'}}/>
                <Text>당신의 취향과 체형을 1:1로 분석하여</Text>
                <Text>상품정보와 사이즈를 포함한 코디를 추천해드려요.</Text>
            </div>
            <IndexWrap></IndexWrap>
            </InnerWrap>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-image: url(); */
`;

const InnerWrap = styled.div`
    width: 100vw;
    height: 56.8rem;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Title = styled.div`
    position: relative;
    top: 3%;
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.09;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const Img = styled.img`
    position: relative;
    top: 5%;    
    width: 19.2rem;
    height: 30rem;
    border-radius: 0.6rem;
    border: solid 0.1rem #707070;
`;

const Text = styled.div`
    font-size: ${props=>props.big?'1.4':'1.2'}rem;
    font-weight: ${props=>props.big?'bold':'normal'};
    line-height: 2.33;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const IndexWrap = styled.div`
    position: relative;
    top: 15%;
    width: 6.5rem;
    height: 0.7rem;
    border: solid 1px white;
`;