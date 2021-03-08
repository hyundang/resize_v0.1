import React, { useState } from "react";
import styled from "styled-components";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// router
import { useRouter } from "next/router";

SwiperCore.use([Pagination, Autoplay]);

export default () => {
    const router = useRouter();
   
    const [isShown, setIsShown] = useState(false);

    return(
        <Wrap onClick={()=>{if(isShown){router.push('/website_dev/style')}}}>
            <InnerWrap>
                <Title>리사이즈 이용 가이드</Title>
                <Swiper
                    style={{height:'90vh',width:'32rem'}}
                    spaceBetween={13}
                    slidesPerview={1}
                    pagination={{clickable:true}}
                    loop={true}
                    onSlideChange={(e)=>{if(e.activeIndex===4){setIsShown(true)}}}
                >
                    <SwiperSlide>
                        <Img style={{background:'red',marginLeft:'6.4rem'}}/>
                        <div style={{height:'11.7rem',marginTop:'4rem'}}>
                            <Text big={true}>스타일링룸이란?</Text>
                            <div style={{height:'3.5rem'}}/>
                            <Text>당신의 취향과 체형을 1:1로 분석하여</Text>
                            <Text>상품정보와 사이즈를 포함한 코디를 추천해드려요.</Text>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img style={{background:'orange',marginLeft:'6.4rem'}}/>
                        <div style={{height:'11.7rem',marginTop:'4rem'}}>
                            <Text big={true}>1. 스타일링 질문에 답하기</Text>
                            <div style={{height:'3.5rem'}}/>
                            <Text>당신의 스타일을 파악하기 위한</Text>
                            <Text>몇가지 질문을 드릴 예정이니 편하게 답해주세요.</Text>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img style={{background:'green',marginLeft:'6.4rem'}}/>
                        <div style={{height:'11.7rem',marginTop:'4rem'}}>
                            <Text big={true}>2. '나만을 위한 코디' 카카오톡으로 받기</Text>
                            <div style={{height:'2.5rem'}}/>
                            <Text>코디가 완성되면 카카오톡으로 오직</Text>
                            <Text>당신만을 위한 1:1 코디를 전송해드려요.</Text>
                            <Text>상품 구매 링크도 함께 전달드리니 참고해주세요.</Text>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img style={{background:'blue',marginLeft:'6.4rem'}}/>
                        <div style={{height:'11.7rem',marginTop:'4rem'}}>
                            <Text big={true}>3. 코디 만족도 응답하기</Text>
                            <div style={{height:'2.5rem'}}/>
                            <Text>만족스럽지 않은 부분을 이야기해주시면</Text>
                            <Text>다음 코디에서부터 바로 반영하여</Text>
                            <Text>더욱 만족스러운 코디를 제공해드릴게요.</Text>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </InnerWrap>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-image: url(); */
`;

const InnerWrap = styled.div`
    width: 100vw;
    height: 56.8rem;
    background: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Title = styled.div`
    position: relative;
    top: 0%;
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