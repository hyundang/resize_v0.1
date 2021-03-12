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
                        <Img style={{marginLeft:'6.4rem'}} url={"/images/website/guide/1.png"}/>
                        <div style={{height:'11.7rem',marginTop:'2rem'}}>
                            <Text big={true}>스타일링룸이란?</Text>
                            <div style={{height:'1.2rem'}}/>
                            <Text>당신의 취향과 체형을 1:1로 분석하여</Text>
                            <Text>상품정보와 사이즈를 포함한 코디를 추천해드려요.</Text>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img style={{marginLeft:'6.4rem'}} url={"/images/website/guide/2.png"}/>
                        <div style={{height:'11.7rem',marginTop:'2rem'}}>
                            <Text big={true}>1. 스타일링 질문에 답하기</Text>
                            <div style={{height:'1.2rem'}}/>
                            <Text>당신의 스타일을 파악하기 위한</Text>
                            <Text>몇가지 질문을 드릴 예정이니 편하게 답해주세요.</Text>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img style={{marginLeft:'6.4rem'}} />
                        <div style={{height:'11.7rem',marginTop:'2rem'}}>
                            <Text big={true}>2. '나만을 위한 코디' 카카오톡으로 받기</Text>
                            <div style={{height:'1.2rem'}}/>
                            <Text>코디가 완성되면 카카오톡으로 오직</Text>
                            <Text>당신만을 위한 1:1 코디를 전송해드려요.</Text>
                            <Text>상품 구매 링크도 함께 전달드리니 참고해주세요.</Text>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img style={{marginLeft:'6.4rem'}} url={"/images/website/guide/4.png"}/>
                        <div style={{marginTop:'2rem'}}>
                            <Text big={true}>3. 코디 만족도 응답하기</Text>
                            <div style={{height:'1.2rem'}}/>
                            <Text>만족스럽지 않은 부분을 이야기해주시면</Text>
                            <Text>다음 코디에서부터 바로 반영하여</Text>
                            <Text>더욱 만족스러운 코디를 제공해드릴게요.</Text>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </InnerWrap>
            <Btn 
                onClick={()=>router.push('website_dev/style')}
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
    height: 44rem;
    background: none;
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

const Img = styled.div`
    position: relative;
    margin-top: 1rem;   
    width: 19.2rem;
    height: 25rem;
    border-radius: 0.6rem;
    background: url(${props=>props.url}) center center / cover;
`;

const Text = styled.div`
    font-size: ${props=>props.big?'1.4':'1.2'}rem;
    font-weight: ${props=>props.big?'bold':'normal'};
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
    bottom: 5%;
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
    /* transition: 0.5s; */
`;
