import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default ({
    id, text, data_num,
    isOverlap, maxNum, isNoneExist,
    selectData, setSelectData, 
    isNoneClicked, setIsNoneClicked,
    setIsOther
}) => {
    const [isClicked, setIsClicked] = useState(false);

    if(isNoneExist){
        //'없음'항목 존재할 때
        useEffect(()=>{
            if(id !== data_num-1 & isNoneClicked){
                setIsClicked(false);
            }
            if(id === data_num-1 & !isNoneClicked){
                setIsClicked(false);
                setSelectData(selectData.filter((s, idx)=>{
                    return s !== data_num-1;
                }));
            }
        }, [isNoneClicked]);
    };

    const handleOverlapClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
            if(text === "기타"){
                setIsOther(false);
            }
        }
        else{
            if(isNoneExist & id === data_num-1){
                if(text === "기타"){
                    setIsOther(true);
                }
                setSelectData([id]);
                setIsNoneClicked(true);
                setIsClicked(true);
            }
            else{
                if(text === "기타"){
                    setIsOther(true);
                }
                setSelectData(selectData.concat([id]));
                setIsNoneClicked(false);
                setIsClicked(true);
            }
        }
        console.log(selectData);
    };

    const handleTwoClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
            if(text === "기타"){
                setIsOther(false);
            }
        }
        else{
            if(selectData.length < maxNum){
                if(text === "기타"){
                    setIsOther(true);
                }
                setSelectData(selectData.concat([id]));
                setIsClicked(true);
            }
        console.log(selectData);
        }
    };
    
    return(
            <Wrap 
                onClick={isOverlap? handleOverlapClick : handleTwoClick}
                isClicked={isClicked}
            >
                {text}
            </Wrap>
    )
};

const Wrap = styled.div`
    width: 15.5rem;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    border-radius: 2.8rem;
    border: ${props=>(props.isClicked? 'none' : `solid 0.1rem #a99174`)};
    background-color: ${props=>(props.isClicked? ({ theme }) => theme.colors.beige : ({ theme }) => theme.colors.white)};
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    color: ${props=>(props.isClicked? ({ theme }) => theme.colors.off_white : ({ theme }) => theme.colors.pale_brown)};
`;