import React from "react";
import styled from "styled-components";

export default ({text, onClick, isActive}) => {
    return(
        <Wrap 
            onClick={onClick}
            isActive={isActive}
        >
            {text}
        </Wrap>
    )
}

const Wrap = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 8.6rem;
    /* padding: 0rem 1rem; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.isActive? '#DDC9B2' : '#e6e6e6'};
    font-size: 1.6rem;
    font-weight: bold;
    color: ${props=>props.isActive? 'white' : 'black'};
    letter-spacing: -0.4px;
    transition: 0.5s;
`;