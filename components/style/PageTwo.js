import React, {useState} from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question } from "../../components/common";
// hooks
import useWindowSize from '../../hooks/useWindowSize';



export default ({quesNum, lastQuesNum, setPageNum}) => {
    const [size, setSize] = useState(useWindowSize());

    return(
        <>
        <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
        <Wrap height={size.height}>
            <Question
                quesNum={quesNum}
                quesText={"당신의 성별은 무엇인가요?"}
            />
        </Wrap>
        <Bottom setPageNum={setPageNum} pageNum={quesNum}/>
        </>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    width: 100%;
    height: ${props=>(props.height/10-20)}rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;