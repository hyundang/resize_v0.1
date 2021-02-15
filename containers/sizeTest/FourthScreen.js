import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {FourthBackImgState} from '../../states/atom';


const FourthScreen = () => {
    const [isThirdShow, setIsFourthShow] = useRecoilState(FourthBackImgState);

    return(
        <>
          <PCContainer>
            <Container onClick={() => setIsFourthShow(false)}>
                <TextContainer>
                    <Text>드디어 쇼핑몰 도착한 당신!</Text> 
                    <Text>이번엔 기필코 내 체형에 찰떡인 코디를 찾아야지!</Text>
                    <Text>괜찮은 옷 없나?</Text>
                </TextContainer>
            </Container>
          </PCContainer>
        </>
    )
}

export default FourthScreen;

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
  background: url(/images/sizetest/background/3_bg.jpg) right top no-repeat;
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
  font-size: 1.05rem;
  font-weight: 400;
  font-family: 'Noto Serif KR', serif;
  text-shadow: 0.8vw 0.8vw 1vw gray;
  padding: 0.8vw 0;
  @media (max-width: 1024px) {
    padding: 1.5vw 0;
  }
  @media (max-width: 500px) {
    padding: 2vw 0;
  }
`;