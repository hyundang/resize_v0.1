import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default ({text, id, selectData, setSelectData}) => {
    const [isClicked, setIsClicked] = useState(false);
    
    useEffect(()=>{
        if(!selectData.includes(id)){
            setIsClicked(false);
        }
    },[selectData])

    const handleOneClick = () => {
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
    };

    return(
        <>
            <Wrap onClick={handleOneClick} isClicked={isClicked}>
                {text}
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    cursor: pointer;
    width: 7.6rem;
    height: 3.8rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.9rem;
    border: ${props=>(props.isClicked? 'none' : `solid 0.1rem #a99174`)};
    background-color: ${props=>(props.isClicked? ({ theme }) => theme.colors.beige : ({ theme }) => theme.colors.white)};
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: ${props=>(props.isClicked? ({ theme }) => theme.colors.off_white : ({ theme }) => theme.colors.pale_brown)};
`;