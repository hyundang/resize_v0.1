import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default ({data, data_num}) => {
    const [selectData, setSelectData] = useState([]);
    const [isNoneClicked, setIsNoneClicked] = useState(false);

    return(
        <Wrap>
            {data.map((item, idx)=>{
                return <Circle
                            key={idx}
                            text={item}
                            id={idx}
                            data_num={data_num}
                            selectData={selectData} setSelectData={setSelectData}
                            isNoneClicked={isNoneClicked} setIsNoneClicked={setIsNoneClicked}
                        />
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    margin-top: 4.1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
`;

const Circle = ({id, text, data_num, selectData, setSelectData, isNoneClicked, setIsNoneClicked}) => {
    const [isClicked, setIsClicked] = useState(false);

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

    const handleClick = () => {
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


    return(
        <CircleWrap>
            <CircleBox onClick={handleClick} id={id}>
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
    border: solid 0.1rem black;
    margin-bottom: 1rem;
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
    font-size: 1rem;
`;