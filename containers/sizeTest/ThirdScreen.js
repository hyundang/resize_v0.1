import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {ThirdBackImgState} from '../../states/atom';


const ThirdScreen = () => {
    const [isThirdShow, setIsThirdShow] = useRecoilState(ThirdBackImgState);

    return(
        <>
            <Container onClick={() => setIsThirdShow(false)}>
                <TextContainer>
                    <Text>오랜만에 외출이라서 그런가?</Text> 
                    <Text>저기 서있는 사람이 계속 쳐다본다.</Text>
                </TextContainer>
            </Container>
        </>
    )
}

export default ThirdScreen;

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
  background: url(/images/sizetest/background/2_bg.jpg) right top no-repeat;
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
  text-shadow: 0.8vw 0.8vw 0.5vw gray;
`;