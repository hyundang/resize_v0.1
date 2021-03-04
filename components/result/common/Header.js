import React from "react";
import styled from "styled-components";

export default ({text}) => {
    return(
        <Wrap>
            {text}
        </Wrap>
    )
}

const Wrap = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.16);
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.45px;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;
