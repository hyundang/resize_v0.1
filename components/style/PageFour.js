import React, {useState} from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo } from "../../components/common";
// hooks
import useWindowSize from '../../hooks/useWindowSize';



export default ({quesNum, lastQuesNum, setPageNum}) => {
    const [size, setSize] = useState(useWindowSize());

    return(
        <>
        <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
        <Wrap height={size.height}>
        <QuestionTwo
                quesNum={quesNum}
                quesTextOne={"다음 중 시도해보고 싶은 스타일을"}
                quesTextTwo={"순서대로 골라주실래요?"}
                overlapText={"최대 3개"}
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
