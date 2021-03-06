import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default ({data, selectData, setSelectData}) => {
    return (
        <Wrap>
            {data.map((item, idx)=>{
                return ((item==='기타')?
                 <Btn 
                    key={idx}
                    id={idx}
                    text={item}
                    selectData={selectData}
                    setSelectData={setSelectData}
                    isOther={true}
                />
                :<Btn 
                    key={idx}
                    id={idx}
                    text={item}
                    selectData={selectData}
                    setSelectData={setSelectData}
                    isOther={false}
                />
                )
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: flex-start;
`;

const Btn = ({selectData, setSelectData, text, isOther}) => {
    const [isClicked, setIsClicked] = useState(false);
    
    useEffect(()=>{
        if(selectData===text){
            setIsClicked(true);
        }
        else{
            setIsClicked(false);
        }
    }, [])

    useEffect(()=>{
        if(selectData===text){
            setIsClicked(true);
        }
        else{
            setIsClicked(false);
        }
        console.log(selectData);
    }, [selectData])

    const handleClick = (e) => {
        if(isClicked){
            // 이미 클릭 되어있던 상태
            setIsClicked(false);
            setSelectData("");
        }
        else{
            setIsClicked(true);
            setSelectData(text);
        }
    }

    return (
        <BtnBox
            isClicked={isClicked}
            isOther={isOther}
            onClick={handleClick}
        >
            {text}
        </BtnBox>
    )
}

const BtnBox = styled.div`
    width: ${props=>props.isOther? '7.6' : '15.4'}rem;
    height: 4.2rem;
    margin-bottom: 1rem;
    border-radius: 2.1rem;
    background-color: ${props=>props.isClicked? '#DAC2A3' : '#f2f2f2'};
    color: ${props=>props.isClicked? 'white' : ({theme})=>theme.colors.black};
    font-size: 1.2rem;  
    font-weight: normal;
    text-align: center;
    line-height: 4.2rem;
`;
