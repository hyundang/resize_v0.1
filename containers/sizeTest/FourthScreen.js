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
                    <Text>드디어 쇼핑몰에 도착한 당신!</Text> 
                    <Text>이번엔 기필코 디자인, 스타일, 사이즈까지</Text>
                    <Text>다 잡는 찰떡 코디를 찾아야지!</Text>
                    <Text>괜찮은 옷 없나?</Text>
                </TextContainer>
                <GoText> 탭하여 계속하기 </GoText>
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
  align-items:center;
  background-color: #f6f2eb;
  width: 100%;
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
  padding : 10px 25px;
  margin-bottom : 15vw;
  margin-top: 50px;
  @media (max-width: 500px) {
    padding : 10vw 0;
    margin-bottom : 15vw;
    margin-top: 0;
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
  padding: 10px 0;
  @media (max-width: 500px) {
    padding: 20px 0;
  }
`;