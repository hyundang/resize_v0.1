import React, {useState} from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question, ChoiceBtn } from "../../components/common";
// hooks
import useWindowSize from '../../hooks/useWindowSize';



export default ({quesNum, lastQuesNum, setPageNum}) => {
    const [size, setSize] = useState(useWindowSize());
    const [isManClick, setIsManClick] = useState(false);
    const [isWomanClick, setIsWomanClick] = useState(false);

    return(
        <>
        <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
        <Wrap height={size.height}>
            <Question
                quesNum={quesNum}
                quesText={"당신의 성별은 무엇인가요?"}
            />
            <BtnWrap>
                <ChoiceBtn 
                    text={"남"} 
                    isClick={isManClick}
                    onClick={()=>{setIsManClick(true);setIsWomanClick(false)}}
                />
                <ChoiceBtn 
                    text={"여"} 
                    isClick={isWomanClick}
                    onClick={()=>{setIsManClick(false);setIsWomanClick(true)}}
                />
            </BtnWrap>
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

const BtnWrap = styled.div`
    margin-top: 11rem;
    width: 100%;
    height: 3.6rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;