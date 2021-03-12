import React from "react";
import styled from "styled-components";

export default () => {
    return(
        <Wrap>
            LOADING...
        </Wrap>
    )
}

const Wrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
`;