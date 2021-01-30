import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {FirstBackImgState} from '../../states/atom';


const FirstScreen = () => {
    const [isFirstShow, setIsFirstShow] = useRecoilState(FirstBackImgState);

    return(
        <>
            <Container onClick={() => setIsFirstShow(false)}>
                <TextContainer>
                    <Text>코로나 시국이 끝나고 </Text> 
                    <Text>오랜만에 옷 쇼핑을 나선 당신,</Text>
                    <Text>리사이즈와 함께 쇼핑하러 가볼까요? </Text>
                    <Text>쇼핑 가기 전, 준비하러 가봅시다!</Text>
                </TextContainer>
            </Container>
        </>
    )
}

export default FirstScreen;

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/images/sizetest/background/1_bg.jpg) right top no-repeat;
  background-size: cover;
`;

const TextContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding : 10vw 5vw;
`;

const Text = style.div`
  padding: 2vw 0;
  justify-content:center;
  align-items: center;
  color : white;
  font-size: 1.1rem;
  font-weight:300;
  font-family: 'Noto Serif KR', serif;
  line-height: 8vw;
  text-shadow: 0.8vw 0.8vw 0.9vw gray;
`;