import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {SecondBackImgState} from '../../states/atom';


const SecondScreen = () => {
    const [isSecondShow, setIsSecondShow] = useRecoilState(SecondBackImgState);

    return(
        <>
          <PCContainer>
            <Container onClick={() => setIsSecondShow(false)}>
                <TextContainer>
                    <Text>늦었다 늦었어! </Text> 
                    <Text>얼른 지하철 타러 가야지</Text>
                </TextContainer>
                <GoText> 탭하여 계속하기 </GoText>
            </Container>
          </PCContainer>
        </>
    )
}

export default SecondScreen;

const PCContainer = style.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:start;
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
  padding : 0 5vw 0 5vw ;
`;

const Text = style.div`
  justify-content:center;
  align-items: center;
  color : white;
  font-size: 16px;
  font-weight:300;
  font-family: 'Noto Serif KR', serif;
  text-shadow: 0.8vw 0.8vw 0.9vw gray;
  padding: 0.8vw 0;
  @media (max-width: 1024px) {
    padding: 1.5vw 0;
  }
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
  text-shadow: 0.8vw 0.8vw 0.9vw gray;
  padding: 0.8vw 0;
  @media (max-width: 1024px) {
    padding: 1.5vw 0;
  }
  @media (max-width: 500px) {
    padding: 2vw 0;
  }
`;