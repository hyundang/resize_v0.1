import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default ({data, data_num, isThree, isTwo, isOverlap}) => {
    const [selectData, setSelectData] = useState([]);
    const [isNoneClicked, setIsNoneClicked] = useState(false);

    return(
        <Wrap isThree={isThree} isTwo={isTwo}>
            {data.map((item, idx)=>{
                return <Circle
                            key={idx}
                            text={item}
                            id={idx}
                            isOverlap={isOverlap}
                            data_num={data_num}
                            selectData={selectData} setSelectData={setSelectData}
                            isNoneClicked={isNoneClicked} setIsNoneClicked={setIsNoneClicked}
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
    id, text, data_num, 
    isOverlap,
    selectData, setSelectData, 
    isNoneClicked, setIsNoneClicked
}) => {
    const [isClicked, setIsClicked] = useState(false);

    if(isOverlap){
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
    else{
        useEffect(()=>{
            if(selectData.length === 1 & selectData[0] !== id){
                setIsClicked(false);
            }
        },[selectData])
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
            if(id === data_num-1){
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
        // console.log(selectData);
    }

    const handleOneClick = (e) => {
        if(isClicked){
            // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
            setSelectData(selectData.filter((s, idx)=>{
                return s !== id;
            }))
            setIsClicked(false);
        }
        else{
            setSelectData([id]);
            setIsClicked(true);
        }
        // console.log(selectData);
    }


    return(
        <CircleWrap>
            <CircleBox onClick={isOverlap? handleOverlapClick : handleOneClick} id={id}>
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
    box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url(); */
`;

const ClickedCircle = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    opacity: 0.55;
    display: ${props=>props.isClicked? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: #5d5757;
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