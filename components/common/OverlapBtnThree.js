import React, { useState } from 'react';
import styled from 'styled-components';

export default ({text, id, selectData, setSelectData}) => {
    const [isClicked, setIsClicked] = useState(false);

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
    };

    return(
        <>
            <Wrap 
                onClick={handleOverlapClick}
                isClicked={isClicked}
            >
                {text}
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    cursor: pointer;
    width: 6.0rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.6rem;
    border: ${props=>props.isClicked? 'none' : `solid 0.1rem #a99174`};
    background-color: ${props=>props.isClicked? ({ theme }) => theme.colors.beige : ({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: ${props=>props.isClicked? ({ theme }) => theme.colors.off_white : ({ theme }) => theme.colors.pale_brown};
    /* &:hover{
        background-color: ${({ theme }) => theme.colors.beige};
        color: ${({ theme }) => theme.colors.off_white};
        border: none;
    } */
`;