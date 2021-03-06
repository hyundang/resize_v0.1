import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { InputBoxBig, Question } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// recoil
import { BodyPnCState } from "../../states/size_atom";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    const pros = useRecoilInput(BodyPnCState(0));
    const cons = useRecoilInput(BodyPnCState(1));

    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(pros.value!=="" & cons.value!==""){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [pros.value, cons.value])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"체형에서 보완하고 싶은 점"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig 
                    text={"예) 종아리가 두꺼워서 얇아보이고 싶어요."}
                    input={pros}

                />
                <div style={{marginBottom:'3.3rem'}}/>
                <Question
                    quesNum={0}
                    quesText={"체형의 장점"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig 
                    text={"예) 다리가 길어서 키가 커보여요."}
                    input={cons}
                />
                <div style={{marginBottom:'3.3rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isLeftOkay={true} isRightOkay={isRightOkay}
            />
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
