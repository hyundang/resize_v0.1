import React, {useState} from "react";
import styled from "styled-components";
const imgs = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];


export default ({data}) => {
    const [isOneClick, setIsOneClick] = useState(false);
    const [isTwoClick, setIsTwoClick] = useState(false);
    const [isThreeClick, setIsThreeClick] = useState(false);

    
    return(
        <>
        <Wrap>
            {data.map((style, idx)=>{
                <StyleChoose
                    key={idx}
                    id={idx}
                    text={style}
                />
            })}
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    padding: 0 2.4rem;
    display: grid;
    grid-template-columns: 1fr;
`;


const StyleChoose = () => {
    return(
        <>
        <StyleWrap></StyleWrap>
        </>
    )
}

const StyleWrap = styled.div`

`;

const StyleImg = styled.div`

`;