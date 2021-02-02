import React, {useEffect} from 'react';
import style from 'styled-components';
// recoil
import Image from 'next/image';
import {useRecoilState} from 'recoil';
import {LoadingState} from '../../states/atom';

const LoadingContainer = () => {
    const [isLoading, setIsLoading] = useRecoilState(LoadingState);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 8000)
    }, [])
    
    return(
        <>
            <Container>
            <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
                <MainContainer>
                    <ImageContainer>
                        <Image src={'/images/sizetest/loading_pink.png'} width="300" height="300" />
                    </ImageContainer>
                    <Text>고객님의 체형을 분석중입니다</Text>
                </MainContainer>
            </Container>
        </>
    )
}

export default LoadingContainer;

const Container = style.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: #f3ece3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LogoContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  background-color: #a99174;
  padding : 1vw;
`;

const MainContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  padding: 20vw 5vw 0 5vw;
`;

const ImageContainer = style.div`
  width: 60%;
`;

const Text = style.div`
  padding: 3vw;
  color : black;
  font-weight: 700;
  text-align: center;
  font-size: 1.1rem;
  line-height: 9vw;
  font-family: 'Nanum Myeongjo', serif;
`;