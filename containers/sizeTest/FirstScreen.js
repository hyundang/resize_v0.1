import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {FirstBackImgState} from '../../states/atom';


const FirstScreen = () => {
    const [isFirstShow, setIsFirstShow] = useRecoilState(FirstBackImgState);

    return(
        <>
          <PCContainer>
            <Container onClick={() => setIsFirstShow(false)}>
                <TextContainer>
                    <Text>코로나 시국이 끝나고 </Text> 
                    <Text>오랜만에 옷 쇼핑을 나선 당신,</Text>
                    <Text>리사이즈와 함께 쇼핑하러 가볼까요? </Text>
                    <Text>쇼핑 가기 전, 준비하러 가봅시다!</Text>
                </TextContainer>
                <GoText>탭하여 계속하기 </GoText>
            </Container>
          </PCContainer>
        </>
    )
}

export default FirstScreen;

const PCContainer = style.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  background-color: #f6f2eb;
`

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 500px;
  height: 100%;
  background: url(/images/sizetest/background/1_bg.jpg) right top no-repeat;
  background-size: cover;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const TextContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding : 30px 25px;
  margin-bottom : 20px;
  margin-top : 80px;
  @media (max-width: 500px) {
    padding : 10vw 5vw;
    margin-top : 0px;
  }
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
`;

const Text = style.div`
  justify-content:center;
  align-items: center;
  color : white;
  font-size: 16px;
  font-weight:300;
  font-family: 'Noto Serif KR', serif;
  padding: 10px 0;
  @media (max-width: 500px) {
    padding: 2vw 0;
  }
`;

const GoText = style.div`
  justify-content:center;
  align-items: center;
  color : white;
  font-size: 14px;
  font-weight:300;
  font-family: 'Noto Serif KR', serif;
  margin-top : 160px;
  padding: 10px 0;
  @media (max-width: 500px) {
    margin-top : 80px;
    padding: 20px 0;
  }
`;