import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
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
        <Wrap onClick={()=>{if(isShown){}}} url={"/images/website/background.png"}>
            <InnerWrap>
                <Swiper
                    style={{height:'90vh',width:'32rem'}}
                    spaceBetween={13}
                    slidesPerview={1}
                    pagination={{clickable:true}}
                    loop={true}
                    onSlideChange={(e)=>{if(e.activeIndex===4){setIsShown(true)}}}
                >
                    <SwiperSlide>
                        <div style={{height:'10rem'}}>
                                <Text big={true}>스타일링룸이란?</Text>
                                <div style={{height:'2rem'}}/>
                                <Text>당신의 취향과 체형을 1:1로 분석하여</Text>
                                <Text>상품정보와 사이즈를 포함한 코디를 추천해드려요.</Text>
                        </div>
                        <div style={{height:'4.5rem'}}/>
                        <Img style={{marginLeft:'4.8rem'}} url={"/images/website/guide/1.png"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{height:'10rem'}}>
                                <Text big={true}>1. 스타일링 질문에 답하기</Text>
                                <div style={{height:'2rem'}}/>
                                <Text>당신의 스타일을 파악하기 위한</Text>
                                <Text>몇가지 질문을 드릴 예정이니 편하게 답해주세요.</Text>
                        </div>
                        <div style={{height:'4.5rem'}}/>
                        <Img style={{marginLeft:'4.8rem'}} url={"/images/website/guide/2.png"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{height:'10rem'}}>
                                <Text big={true}>2. '나만을 위한 코디' 카카오톡으로 받기</Text>
                                <div style={{height:'2rem'}}/>
                                <Text>코디가 완성되면 카카오톡으로 오직 당신만을 위한</Text>
                                <Text>코디가 전송되어요. 상품 구매 링크도 함께 전달드립니다.</Text>
                        </div>
                        <div style={{height:'4.5rem'}}/>
                        <Img style={{marginLeft:'4.8rem'}} url={"/images/website/guide/3.png"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{height:'10rem'}}>
                                <Text big={true}>3. 코디 만족도 응답하기</Text>
                                <div style={{height:'2rem'}}/>
                                <Text>만족스럽지 않은 부분을 이야기해주시면 다음 코디에</Text>
                                <Text>바로 반영하여 더욱 만족스러운 코디를 제공해드릴게요.</Text>
                        </div>
                        <div style={{height:'4.5rem'}}/>
                        <Img style={{marginLeft:'4.8rem'}} url={"/images/website/guide/4.png"}/>
                    </SwiperSlide>
                </Swiper>
            </InnerWrap>
            <Btn 
                onClick={()=>router.push('/style')}
                isShown={isShown}
            >
                시작하기
            </Btn>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${props=>props.url}) center center / cover;
`;

const InnerWrap = styled.div`
    position: relative;
    top: -5%;
    width: 100vw;
    height: 50rem;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.div`
    position: relative; 
    width: 22.4rem;
    height: 30.2rem;
    border-radius: 0.6rem;
    background: url(${props=>props.url}) center center / cover;
`;

const Text = styled.div`
    font-size: ${props=>props.big?'1.9':'1.3'}rem;
    font-weight: ${props=>props.big?'bold':'normal'};
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const fadein = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const Btn = styled.div`
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translate(-50%, 0);
    width: 14rem;
    height: 4rem;
    margin-top: 3rem;
    border-radius: 0.4rem;
    background-color: ${({theme})=>theme.colors.black}; 
    display: ${props=>props.isShown? 'flex' : 'none'};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: -0.05rem;
    text-align: center;
    opacity: 1;
    animation: ${fadein} 0.5s;
`;
