import React, { useState } from "react";
import styled from "styled-components";

const datas = ["작다", "", "중간", "", "크다"];

export default ({data}) => {
    const [btnNum, setBtnNum] = useState(-1);
    
    return(
        <>
        <Wrap>
            <BarWrap>
                <Bar/>
                <CircleListWrap>
                    {datas.map((data, idx)=>{
                        return <CircleBtn id={idx} num={btnNum} setnum={setBtnNum}/>
                    })}
                </CircleListWrap>
            </BarWrap>
            <TextWrap>
                {datas.map((data, idx)=>{
                    return <Text>{data}</Text>
                })}
            </TextWrap>
        </Wrap>
        </>
    )
}   

const CircleBtn = ({id, num, setnum}) => {
    const [isClick, setIsClick] = useState(false);
    
    let width = 1.2;
    if(id == 0 || id == 4){
        width = 1.5;
    }

    const handleBtnClick = () => {
        setnum(id);
        setIsClick(true);
    }

    return(
        <CircleWrap onClick={handleBtnClick}>
            <Circle width={width} isClick={isClick} id={id} num={num}/>
            <CircleActive isClick={isClick} id={id} num={num}/>
        </CircleWrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BarWrap = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;

const Bar = styled.div`
    width: 30rem;
    height: 0.3rem;
    background-color: #f3f3f3;
`;

const CircleListWrap = styled.div`
    position: absolute;
    z-index: 2;
    width: 32rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CircleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
`;

const Circle = styled.div`
    width: ${props=>props.isClick? 
    ((props.num==props.id)? 0.8 : props.width) 
    :props.width}rem;
    height: ${props=>props.isClick? 
    ((props.num==props.id)? 0.8 : props.width) 
    :props.width}rem;
    position: absolute;
    z-index: 2;
    border-radius: ${props=>props.isClick? 
    ((props.num==props.id)? 0.4 : props.width/2) 
    :props.width/2}rem;
    background-color: #f3f3f3;
`;

const CircleActive = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    display: ${props=>props.isClick? 
    ((props.num==props.id)? 'box' : 'none') 
    :'none'};
    border-radius: 1.2rem;
    background-color: #be9e78;
`;

const TextWrap = styled.div`
    width: 31rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.72rem;
`;

const Text = styled.div`
    width: 2.3rem;
    height: 1.8rem;
    font-size: 1.2rem;
    color: ${({theme})=>theme.colors.black};
`;