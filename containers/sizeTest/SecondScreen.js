import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {SecondBackImgState} from '../../states/atom';


const SecondScreen = () => {
    const [isSecondShow, setIsSecondShow] = useRecoilState(SecondBackImgState);

    return(
        <>
            <Container onClick={() => setIsSecondShow(false)}>
                <TextContainer>
                    <Text>늦었다 늦었어! </Text> 
                    <Text>얼른 지하철 타러 가야지</Text>
                </TextContainer>
            </Container>
        </>
    )
}

export default SecondScreen;

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
  padding : 15vw 5vw 0 5vw ;
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