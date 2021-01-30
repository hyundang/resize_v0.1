import React, {useEffect} from 'react';
import style from 'styled-components';
// recoil
import {useRecoilState} from 'recoil';
import {LoadingState} from '../../states/atom';

const LoadingContainer = () => {
    const [isLoading, setIsLoading] = useRecoilState(LoadingState);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 2000)
    }, [])
    
    return(
        <>
            <Container>
                Loading...
            </Container>
        </>
    )
}

export default LoadingContainer;

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
  background: url(/images/sizetest/background/1_bg_blur.jpg) right top no-repeat;;
  background-size: cover;
`;