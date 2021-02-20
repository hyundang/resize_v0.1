import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default ({data, data_num, isOverlap, isNoneExist, maxNum}) => {
    const [selectData, setSelectData] = useState([]);
    const [isNoneClicked, setIsNoneClicked] = useState(false);

    return(
        <Wrap>
            {data.map((item, idx)=>{
                return <Square
                            key={idx}
                            text={item}
                            id={idx}
                            data_num={data_num}
                            isOverlap={isOverlap} maxNum={maxNum}
                            isNoneExist={isNoneExist}
                            selectData={selectData} setSelectData={setSelectData}
                            isNoneClicked={isNoneClicked} setIsNoneClicked={setIsNoneClicked}
                        />
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 27rem;
    margin-top: 5.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`;

const Square = ({
    id, text, data_num, 
    isOverlap, maxNum,
    isNoneExist,
    selectData, setSelectData, 
    isNoneClicked, setIsNoneClicked
}) => 
{
    const [isClicked, setIsClicked] = useState(false);

    if(isOverlap & isNoneExist){
        //중복선택이면서 '없음'항목 존재할 때
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
        }, [isNoneClicked])
    }

    const handleOverlapClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
        }
        else{
            if(isNoneExist & id === data_num-1){
                setSelectData([id]);
                setIsNoneClicked(true);
                setIsClicked(true);
            }
            else{
                setSelectData(selectData.concat([id]));
                setIsNoneClicked(false);
                setIsClicked(true);
            }
        }
        console.log(selectData);
    }

    const handleOneClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
        }
        else{
            if(selectData.length < maxNum){
                setSelectData(selectData.concat([id]));
                setIsClicked(true);
            }
        }
        console.log(selectData);
    }


    return(
        <SquareWrap>
            <SquareBox 
                onClick={isOverlap? handleOverlapClick : handleOneClick} 
                id={id}
                isOverlap={isOverlap}
                isNoneExist={isNoneExist}
            >
                <ClickedSquare 
                    isClicked={isClicked}
                    isOverlap={isOverlap}
                    isNoneExist={isNoneExist}
                >✓</ClickedSquare>
            </SquareBox>
            <SquareText>{text}</SquareText>
        </SquareWrap>
    )
}

const SquareWrap = styled.div`
    width: 11.7rem;
    margin-bottom: 2rem;
    display:flex;
    flex-direction: column;
    align-items: center;
`;


const SquareBox = styled.div`
    width: 10.4rem;
    height: 10.4rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    border: ${props=>(props.isOverlap!==props.isNoneExist)? 'none' : 'solid 0.1rem #DAC2A3'};
    box-shadow: ${props=>(props.isOverlap!==props.isNoneExist)? '0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16)' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url(); */
`;

const ClickedSquare = styled.div`
    width: ${props=>(props.isOverlap!==props.isNoneExist)? '10.4' : '10.2'}rem;
    height: ${props=>(props.isOverlap!==props.isNoneExist)? '10.4' : '10.2'}rem;
    border-radius: 0.9rem;
    display: ${props=>props.isClicked? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.36);
    font-size: 1.8rem;
    font-weight: 500;
    text-align: left;
    color: white;
`;

const SquareText = styled.div`
    font-size: 1.2rem;
    color: #797979;
    text-align: center;
    letter-spacing: -0.3px;
    white-space: pre-line;
`;