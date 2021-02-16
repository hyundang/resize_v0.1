import React, { useState } from "react";
import styled from "styled-components";

export default () => {
    const [isClick, setIsClick] = useState(false);
    
    return(
        <>
            <Wrap/>
        </>
    )
}

const Wrap = styled.input.attrs({
    type: 'checkbox',
})`
    width: 2rem;
    height: 2rem;
    border-radius: 0.4rem;
    border: solid 0.1rem #dddddd;
    color: red;
`;