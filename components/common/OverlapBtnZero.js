import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default ({
    id, text, data_num,
    isOverlap, maxNum, isNoneExist,
    selectData, setSelectData, 
    setIsOther
}) => {
    const [isClicked, setIsClicked] = useState(false);

    // 처음 렌더링 되었을 때
    useEffect(()=>{
        if(selectData.includes(id)){
            setIsClicked(true);
        }
    }, [])


    useEffect(()=>{
        // '없음' 항목이 존재하는 경우
        if(isNoneExist){
            if(id !== data_num-1 & selectData.length===1 & selectData.includes(data_num-1)){
                setIsClicked(false);
            }
            if(id === data_num-1 & selectData.length===2 & selectData.includes(id)){
                setIsClicked(false);
                setSelectData(selectData.filter((s, idx)=>{
                    return s !== data_num-1;
                }));
            }
        }
        else{
            if(selectData.includes(id)){
                setIsClicked(true);
            }
            else{
                setIsClicked(false);
            }
        }
    }, [selectData])


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
                setSelectData([id]);
                setIsClicked(true);
            }
            else{
                if(text === "기타"){
                    setIsOther(true);
                }
                setSelectData(selectData.concat([id]));
                setIsClicked(true);
            }
        }
        // console.log(selectData);
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
        // console.log(selectData);
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