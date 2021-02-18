import React, { useEffect } from 'react';
import style, {keyframes} from "styled-components";
// recoil
import { useSetRecoilState } from "recoil";
import { ToastMsgState } from "../../states/atom";

const ToastMsg = ({text}) => {
    const setIsToastMsgShow = useSetRecoilState(ToastMsgState);

    useEffect(()=>{
        setTimeout(()=>{
            setIsToastMsgShow(false);
        }, 2000)
    }, [])
    
    return(
        <>
            <Wrap>
                {text}
            </Wrap>
        </>
    )
}

export default ToastMsg;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Wrap = style.div`
    position: absolute;
    z-index: 5;
    bottom: 0%;
    background: #3d3d3d;
    border-radius: 0.5rem;
    width: 80vw;
    height: 15vw;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: ${fadeout} 2s;
`;

