import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default ({
    data, 
    isNoneExist, isOverlap,
    isThree, isTwo,
    isColor,
    selectData, setSelectData
}) => {
    return(
        <Wrap isThree={isThree} isTwo={isTwo}>
            {data.map((item, idx)=>{
                return <Circle
                            key={idx}
                            text={item.name}
                            id={isColor? item.name : item.id}
                            url={item.photo}
                            // text={item}
                            // id={idx}
                            isOverlap={isOverlap} isNoneExist={isNoneExist}
                            selectData={selectData} setSelectData={setSelectData}
                        />
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: ${props=>props.isThree? '28rem' 
    : (props.isTwo? '20rem' : '32rem')};
    margin-left: ${props=>props.isThree? '2rem'
    : (props.isTwo? '6rem' : '0rem')};
    display: grid;
    grid-template-columns: ${props=>props.isThree? '1fr 1fr 1fr' 
    : (props.isTwo? '1fr 1fr' : '1fr 1fr 1fr 1fr')};
    justify-items: center;
`;

const Circle = ({
    id, text, url,
    isOverlap, isNoneExist,
    selectData, setSelectData, 
}) => {
    const [isClicked, setIsClicked] = useState(false);
    
    if(isOverlap){
        // 처음 렌더링 시
        useEffect(()=>{
            if(selectData.includes(id)){
                setIsClicked(true);
            }
        }, [])


        useEffect(()=>{
            // '없음' 항목이 존재하는 경우
            if(isNoneExist){
                if(text === '없음' & selectData.length===2 & selectData.includes(id)){
                    setIsClicked(false);
                    setSelectData(selectData.filter((s, idx)=>{
                        return s !== id;
                    }));
                }
            }
            
            if(selectData.includes(id)){
                setIsClicked(true);
            }
            else{
                setIsClicked(false);
            }
        }, [selectData])
    }
    else{
        // 처음 렌더링 시
        useEffect(()=>{
            if(selectData===id){
                setIsClicked(true);
            }
        }, [])

        useEffect(()=>{
            if(selectData!==id){
                setIsClicked(false);
            }
        },[selectData])
    }


    // 중복하여 선택하는 경우
    const handleOverlapClick = () => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
        }
        else{
            if(text === '없음'){
                setSelectData([id]);
                setIsClicked(true);
            }
            else{
                setSelectData(selectData.concat([id]));
                setIsClicked(true);
            }
        }
        // console.log(selectData);
    }


    // 1개만 선택하는 경우
    const handleOneClick = (e) => {
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


    return (
        <CircleWrap>
            <CircleBox 
                onClick={isOverlap? handleOverlapClick : handleOneClick} 
                id={id}
                url={url}
            >
                <ClickedCircle isClicked={isClicked}>✓</ClickedCircle>
            </CircleBox>
            <CircleText>{text}</CircleText>
        </CircleWrap>
    )
}

const CircleWrap = styled.div`
    width: 7rem;
    margin-bottom: 2rem;
    display:flex;
    flex-direction: column;
    align-items: center;
`;


const CircleBox = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    margin-bottom: 1rem;
    border: solid 0.1rem #b0b0b0;
    /* background-color: pink; */
    /* box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16); */
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${props=>props.url}) center center / cover;
`;

const ClickedCircle = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    display: ${props=>props.isClicked? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    font-size: 1.8rem;
    font-weight: 500;
    text-align: left;
    color: white;
`;

const CircleText = styled.div`
    font-size: 1.1rem;
    color: #797979;
    text-align: left;
    letter-spacing: -0.3px;
`;