import React, { useEffect, useState } from "react";
import styled from "styled-components";



export default ({
    data, data_num, 
    isOverlap,
    selectData, setSelectData
}) => {
    return(
        <Wrap>
            {data.map((item, idx)=>{
                return <Rectangle
                            key={idx}
                            text={item}
                            id={idx}
                            data_num={data_num}
                            isOverlap={isOverlap}
                            selectData={selectData} setSelectData={setSelectData}
                        />
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    /* margin-top: 5.3rem; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`;

const Rectangle = ({
    id, text, data_num, 
    isOverlap,
    selectData, setSelectData
}) => 
{
    const [isClicked, setIsClicked] = useState(false);

    if(isOverlap){
        useEffect(()=>{
            if(selectData.includes(id)){
                setIsClicked(true);
            }
        }, [])
    }
    else{
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

    // 중복선택 할 경우
    const handleOverlapClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
        }
        else{

            setSelectData(selectData.concat([id]));
            setIsClicked(true);
        }
        // console.log(selectData);
    }

    // 한 개만 선택할 경우
    const handleOneClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(-1);
            setIsClicked(false);
        }
        else{
            setSelectData(id);
            setIsClicked(true);
        }
        // console.log(selectData);
    }


    return(
        <RectangleWrap>
            <RectangleBox 
                onClick={isOverlap? handleOverlapClick : handleOneClick} 
                id={id}
            >
                <ClickedRectangle isClicked={isClicked}>✓</ClickedRectangle>
            </RectangleBox>
            <RectangleText>{text}</RectangleText>
        </RectangleWrap>
    )
}

const RectangleWrap = styled.div`
    width: 10.6rem;
    margin-bottom: 2rem;
    display:flex;
    flex-direction: column;
    align-items: center;
`;


const RectangleBox = styled.div`
    width: 10.2rem;
    height: 20.2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    border: solid 0.1rem #DAC2A3;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url(); */
`;

const ClickedRectangle = styled.div`
    width: 10rem;
    height: 20rem;
    border-radius: 0.9rem;
    display: ${props=>props.isClicked? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.36);
    font-size: 5rem;
    font-weight: bold;
    text-align: left;
    color: white;
`;

const RectangleText = styled.div`
    font-size: 1.2rem;
    color: #797979;
    text-align: center;
    letter-spacing: -0.3px;
    white-space: pre-line;
`;