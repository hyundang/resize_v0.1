import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { InputBoxBig, Question } from "../../components/common";
// hooks
import useInput from "../../hooks/useRecoilInput";
// recoil
import { QuesEightState } from "../../states/style_atom";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    // 유저 input값
    const input = useInput(QuesEightState);
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"이 외 ❌입고 싶지 않은❌ 옷의 종류"}
                    overlapText={"선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig 
                    text={"예) 카라티, 무스탕, 라이더 자켓, 양털 자켓"}
                    input={input}
                />
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isLeftOkay={true} isRightOkay={true}
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