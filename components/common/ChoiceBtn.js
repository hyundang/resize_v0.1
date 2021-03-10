import React from 'react';
import styled from 'styled-components';

export default ({text, isClick, onClick}) => {
    return(
        <>
            <Wrap isClick={isClick} onClick={onClick}>
                {text}
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    cursor: pointer;
    width: 15.2rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.8rem;
    border: solid 0.1rem ${props=>props.isClick? 'none' : ({ theme }) => theme.colors.pale_brown};
    background-color: ${props=>props.isClick? ({ theme }) => theme.colors.beige : ({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    text-align: cente r;
    color: ${props=>props.isClick? ({ theme }) => theme.colors.off_white : ({ theme }) => theme.colors.pale_brown};
`;