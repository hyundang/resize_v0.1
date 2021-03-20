import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default ({
    data,
    isOverlap, maxNum,
    isBorderLine,
    selectData, setSelectData
}) => {
    return(
        <Wrap>
            {data.map((item, idx)=>{
                return <Square
                            key={idx}
                            text={item.name}
                            id={item.id}
                            url={item.photo}
                            data={selectData}
                            isOverlap={isOverlap} maxNum={maxNum}
                            isBorderLine={isBorderLine}
                            selectData={selectData} setSelectData={setSelectData}
                        />
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 27rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`;

const Square = ({
    id, text, url, 
    data,
    isOverlap, maxNum,
    isBorderLine,
    selectData, setSelectData, 
}) => {
    const [isClicked, setIsClicked] = useState(false);

    // 처음 렌더링 됐을 때
    useEffect(()=>{
        if(data!=undefined){
            if(data.includes(id)){
                setIsClicked(true);
            }
        }
    }, [])

    // 유저 선택 값이 변경 될 때마다
    useEffect(()=>{
        if(selectData.includes(id)){
            setIsClicked(true);
        }
        else{
            setIsClicked(false);
        }
    }, [selectData])


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
        // console.log(selectData);
    }


    return(
        <SquareWrap>
            <SquareBox 
                onClick={isOverlap? handleOverlapClick : handleOneClick} 
                id={id}
                isBorderLine={isBorderLine}
                url={url}
            >
                <ClickedSquare 
                    isClicked={isClicked}
                    isBorderLine={isBorderLine}
                >✓</ClickedSquare>
            </SquareBox>
            <SquareText>{text}</SquareText>
        </SquareWrap>
    )
}

const SquareWrap = styled.div`
    width: 12rem;
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
    border: ${props=>!props.isBorderLine? 'none' : 'solid 0.1rem #DAC2A3'};
    box-shadow: ${props=>!props.isBorderLine? '0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16)' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${props=>props.url}) center center / cover;
`;

const ClickedSquare = styled.div`
    width: ${props=>!props.isBorderLine? '10.4' : '10.2'}rem;
    height: ${props=>!props.isBorderLine? '10.4' : '10.2'}rem;
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