import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {SecondBackImgState} from '../../states/atom';


const SecondScreen = () => {
    const [isSecondShow, setIsSecondShow] = useRecoilState(SecondBackImgState);

    return(
        <>
            <Container onClick={() => setIsSecondShow(false)}/>
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
  background: url(/images/sizetest/background/2_bg.jpg) right top no-repeat;
  background-size: cover;
`;