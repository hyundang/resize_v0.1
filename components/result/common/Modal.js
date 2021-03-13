import React from "react";
import styled from "styled-components";

export default ( {setIsShown, innerPageNum} ) => {    
    return (
        <>
        <Back onClick={()=>setIsShown(false)}/>
        <Wrap>
            <div style={{height:'6.5rem'}}/>
            <div style={{fontSize:'1.6rem',whiteSpace:'pre-line',color:'#333333',lineHeight:'1.75',textAlign:'center'}}>
                {innerPageNum===0? "요청사항 작성을 완료해주세요!"
                :(innerPageNum===1?
                    "이전 코디를 보고싶다면\n만족도 조사를 완료해주세요!"
                    :"만족도 조사를 완료해주세요!")}
            </div>
            <Btn onClick={()=>setIsShown(false)}>
                확인
            </Btn>
        </Wrap>
        </>
    )
}


const Back = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
`;

const Wrap = styled.div`
    position: fixed;
    z-index: 50;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 31rem;
    height: 23rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 1.2rem;
    background-color: #ffffff;
`;

const Btn = styled.div`
    position: absolute;
    width: 25.2rem;
    height: 4.6rem;
    bottom: 3rem;
    border-radius: 0.8rem;
    background-color: #ddc9b2;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    text-align: left;
`;