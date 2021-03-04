import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default ({
    id, text, data_num,
    btnType,
    isOverlap, maxNum, 
    isNoneExist,
    selectData, setSelectData, 
    setIsOther,
    innerPageNum
}) => {
    const [isClicked, setIsClicked] = useState(false);


    if(isOverlap | maxNum===2){
        // 중복선택일 경우 또는 최대 2개 선택일 경우
        // 처음 렌더링 되었을 때
        useEffect(()=>{
            // 선택된 값들 클릭으로 표시
            if(selectData.includes(id)){
                setIsClicked(true);
            }
            if(isNoneExist){
                // 기타 입력란 뜨도록 
                if(selectData.includes(data_num-2)){
                    setIsOther(true);
                }
            }
            else{
                // 기타 입력란 뜨도록 
                if(selectData.includes(data_num-1)){
                    setIsOther(true);
                }
            }

        }, [])

        useEffect(()=>{
            //cody question 3에서 inner page 전환 시 태그 클릭 여부 결정
            if(selectData.includes(id)){
                setIsClicked(true);
            }
            else{
                setIsClicked(false);
            }
            // cody question 3에서 inner page 전환 시 기타 항목 표시 여부 결정
            if(selectData.includes(data_num-2)){
                setIsOther(true);
            }
            else{
                setIsOther(false);
            }
        }, [innerPageNum])

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
    }
    else{
        // 1개만 선택하는 경우
        // 처음 렌더링 되었을 때
        useEffect(()=>{
            if(selectData===id){
                setIsClicked(true);
            }
        }, [])

        useEffect(()=>{
            if(selectData===id){
                setIsClicked(true);
            }
            else{
                setIsClicked(false);
            }
        }, [selectData])
    }


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
                setIsOther(false);
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
            // 없음 클릭했을 때
            if(isNoneExist & id === data_num-1){
                setSelectData([id]);
                // setIsNoneClicked(true);
                setIsClicked(true);
                setIsOther(false);
            }
            else if(selectData.length < maxNum){
                // setIsNoneClicked(false);
                if(text === "기타"){
                    setIsOther(true);
                }
                setSelectData(selectData.concat([id]));
                setIsClicked(true);
            }
        // console.log(selectData);
        }
    };


    const handleOneClick = () => {
        setSelectData(id);
        setIsClicked(true);
    }

    
    
    return(
            <Wrap
                onClick=
                {isOverlap? 
                    handleOverlapClick 
                    : (maxNum===2)? 
                        handleTwoClick 
                        : handleOneClick }
                btnType={btnType}
                isClicked={isClicked}
            >
                {text}
            </Wrap>
    );
}

const Wrap = styled.div`
    width: ${props=>(props.btnType===-1)? '29rem'
            : (props.btnType===0)? '15.5rem'
                : (props.btnType===1)? '10rem'
                    :'7.6rem'};
    height: ${props=>(props.btnType===-1)? '5.6rem'
            : (props.btnType===0)? '5.6rem'
                : (props.btnType===1)? '4.2rem'
                    :'3.8rem'};
    margin-bottom: ${props=>(props.btnType===-1)? '1.2rem'
                    : (props.btnType===0)? '1.2rem'
                        : (props.btnType===1)? '1.5rem'
                            :'1rem'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props=>(props.btnType===-1)? '2.8rem'
                    : (props.btnType===0)? '2.8rem'
                        : (props.btnType===1)? '2.1rem'
                            :'1.9rem'};
    border: ${props=>(props.isClicked? 'none' : `solid 0.1rem #a99174`)};
    background-color: ${props=>(props.isClicked? ({ theme }) => theme.colors.beige : ({ theme }) => theme.colors.white)};
    font-size: ${props=>(props.btnType===-1)? '1.4rem'
                    : (props.btnType===0)? '1.4rem'
                        : (props.btnType===1)? '1.2rem'
                            :'1.2rem'};
    font-weight: 500;
    text-align: center;
    color: ${props=>(props.isClicked? ({ theme }) => theme.colors.off_white : ({ theme }) => theme.colors.pale_brown)};
`;