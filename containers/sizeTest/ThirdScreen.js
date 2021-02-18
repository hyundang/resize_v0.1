import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {ThirdBackImgState} from '../../states/atom';


const ThirdScreen = () => {
    const [isThirdShow, setIsThirdShow] = useRecoilState(ThirdBackImgState);

    return(
        <>
          <PCContainer>
            <Container onClick={() => setIsThirdShow(false)}>
                <TextContainer>
                    <Text>앗, 열차를 놓칠 수는 없지.</Text> 
                </TextContainer>
                <GoText> 탭하여 계속하기 </GoText>
            </Container>
          </PCContainer>
        </>
    )
}

export default ThirdScreen;

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
  padding : 10vw 5vw;
  margin-bottom : 15vw;
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