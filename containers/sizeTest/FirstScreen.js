import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {FirstBackImgState} from '../../states/atom';


const FirstScreen = () => {
    const [isFirstShow, setIsFirstShow] = useRecoilState(FirstBackImgState);

    return(
        <>
            <Container onClick={() => setIsFirstShow(false)}/>
        </>
    )
}

export default FirstScreen;

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