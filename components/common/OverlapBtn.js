import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default ({text, id, selectData, setSelectData}) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(()=>{
        if(selectData!==id){
            setIsClicked(false);
        }
    }, [selectData])
    
    useEffect(()=>{
        if(selectData!==id){
            setIsClicked(false);
        }
        else{
            setIsClicked(true);
        }
    }, [])

    const handleClick = () => {
        setSelectData(id);
        setIsClicked(true);
    }
    
    return(
        <>
            <Wrap isClicked={isClicked} onClick={handleClick}>
                {text}
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    cursor: pointer;
    width: 29rem;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    border-radius: 2.8rem;
    border: ${props=>(props.isClicked? 'none' : `solid 0.1rem #a99174`)};
    background-color: ${props=>(props.isClicked? ({ theme }) => theme.colors.beige : ({ theme }) => theme.colors.white)};
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    color: ${props=>(props.isClicked? ({ theme }) => theme.colors.off_white : ({ theme }) => theme.colors.pale_brown)};
`;