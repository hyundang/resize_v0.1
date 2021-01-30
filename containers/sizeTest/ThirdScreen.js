import React from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {ThirdBackImgState} from '../../states/atom';


const ThirdScreen = () => {
    const [isThirdShow, setIsThirdShow] = useRecoilState(ThirdBackImgState);

    return(
        <>
            <Container onClick={() => setIsThirdShow(false)}/>
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
  background: url(/images/sizetest/background/3_bg.jpg) right top no-repeat;
  background-size: cover;
`;