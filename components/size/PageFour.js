import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { InputBoxBig, Question } from "../../components/common";
// hooks
import useInput from "../../hooks/useInput";



export default ({quesNum, lastQuesNum, setPageNum}) => {
    const pros = useInput("");
    const cons = useInput("");
    
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"체형에서 보완하고 싶은 점은 무엇인가요?"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig 
                    text={"예) 종아리가 두꺼워서 얇아보이고 싶어요."}
                    input={pros}

                />
                <div style={{marginBottom:'3.3rem'}}/>
                <Question
                    quesNum={0}
                    quesText={"체형의 장점은 무엇인가요?"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig 
                    text={"예) 다리가 길어서 키가 커보여요."}
                    input={cons}
                />
                <div style={{marginBottom:'3.3rem'}}/>
            </Wrap>
            <Bottom setPageNum={setPageNum} pageNum={quesNum}/>
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
