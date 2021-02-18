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
                    <Text>앗 벌써 시간이 이렇게 됐네?</Text> 
                    <Text>늦었다, 늦었어! </Text> 
                    <Text>얼른 지하철 타러 가야지!</Text>
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
  background: url(/images/sizetest/background/2_bg.jpg) right top no-repeat;
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
  padding : 30px 80px;
  margin-top : 30px;
  @media (max-width: 500px) {
    padding : 10vw 12vw;
    margin-bottom : 15vw;
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
  text-shadow: 0.8vw 0.8vw 0.9vw gray;
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
  text-shadow: 0.8vw 0.8vw 0.9vw gray;
  margin-top : 100px;
  padding: 100px 0 0 0;
  @media (max-width: 500px) {
    padding: 20px 0;
  }
`;