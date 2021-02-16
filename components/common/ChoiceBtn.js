import React from 'react';
import styled from 'styled-components';

export default ({text}) => {
    return(
        <>
            <Wrap>
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
    border: solid 0.1rem ${({ theme }) => theme.colors.pale_brown};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    text-align: cente r;
    color: ${({ theme }) => theme.colors.pale_brown};
    &:hover{
        background-color: ${({ theme }) => theme.colors.beige};
        color: ${({ theme }) => theme.colors.off_white};
        border: none;
    }
`;