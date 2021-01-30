import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {FourthBackImgState} from '../../states/atom';


const FourthScreen = () => {
    const [isThirdShow, setIsFourthShow] = useRecoilState(FourthBackImgState);

    return(
        <>
            <Container onClick={() => setIsFourthShow(false)}>
                <TextContainer>
                    <Text>드디어 쇼핑몰 도착한 당신!</Text> 
                    <Text>이번엔 기필코 내 체형에 찰떡인 코디를 찾아야지!</Text>
                    <Text>괜찮은 옷 없나?</Text>
                </TextContainer>
            </Container>
        </>
    )
}

export default FourthScreen;

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
  background: url(/images/sizetest/background/3_bg.jpg) right top no-repeat;
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
  font-size: 1.05rem;
  font-weight: 400;
  font-family: 'Noto Serif KR', serif;
  line-height: 8vw;
  text-shadow: 0.8vw 0.8vw 1vw gray;
`;