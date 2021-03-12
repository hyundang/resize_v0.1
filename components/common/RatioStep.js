import React, { useEffect, useState } from "react";
import styled from "styled-components";

const datas = ["작다", "", "중간", "", "크다"];

export default ({data, selectData, setSelectData}) => {
    // const [btnNum, setBtnNum] = useState(-1);
    
    return(
        <>
        <Wrap>
            <BarWrap>
                <Bar/>
                <CircleListWrap>
                    {data.map((data, idx)=>{
                        return <CircleBtn 
                            key={idx}
                            id={idx} 
                            num={selectData} 
                            setnum={setSelectData}
                        />
                    })}
                </CircleListWrap>
            </BarWrap>
            <TextWrap>
                {data.map((data, idx)=>{
                    return <Text key={idx}>{data}</Text>
                })}
            </TextWrap>
        </Wrap>
        </>
    )
}   

const CircleBtn = ({id, num, setnum}) => {
    const [isClick, setIsClick] = useState(false);
    
    useEffect(()=>{
        if(num===id){
            setIsClick(true);
        }
    }, [])

    let width = 1.2;
    if(id == 0 || id == 4){
        width = 1.5;
    }

    const handleBtnClick = () => {
        setnum(id);
        setIsClick(true);
    }

    return(
        <CircleWrap onClick={handleBtnClick}>
            <Circle width={width} isClick={isClick} id={id} num={num}/>    
        </CircleWrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BarWrap = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;

const Bar = styled.div`
    width: 30rem;
    height: 0.3rem;
    background-color: #f3f3f3;
`;

const CircleListWrap = styled.div`
    position: absolute;
    z-index: 2;
    width: 31rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CircleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
`;

const Circle = styled.div`
    width: ${props=>props.isClick? 
    ((props.num==props.id)? 2.4 : props.width) 
    :props.width}rem;
    height: ${props=>props.isClick? 
    ((props.num==props.id)? 2.4 : props.width) 
    :props.width}rem;
    border-radius: ${props=>props.isClick? 
    ((props.num==props.id)? 1.2 : props.width/2) 
    :props.width/2}rem;
    border: ${props=>props.isClick? ((props.num===props.id)? 'solid 0.8rem #be9e78' : 'none') : 'none'};
    background-color: #f3f3f3;
`;


const TextWrap = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.72rem;
`;

const Text = styled.div`
    width: 3.2rem;
    height: 1.8rem;
    font-size: 1.15rem;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
`;