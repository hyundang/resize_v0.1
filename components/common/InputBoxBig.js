import React, {useState, useEffect} from "react";
import styled from "styled-components";



export default ({text, input}) => {
    return(
        <Wrap 
            type="text"
            placeholder={text}
            value={input.value}
            onChange={input.onChange}
            maxLength={500}
        />
    )
}

const Wrap = styled.textarea`
    width: 32rem;
    height: 11.6rem;
    padding: 0.9rem 1.2rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: white;
    font-family: "Noto Sans KR";
    font-size: 1.55rem;
    text-align: left;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;