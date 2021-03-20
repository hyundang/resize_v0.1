import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { InputBox, Question, OverlapBtn } from ".";
// hooks
// import useInput from "../../hooks/useInput";

export default ({
    data, data_num, 
    btnType, 
    isOverlap, maxNum, 
    isNoneExist,
    otherText, inputText,
    selectData, setSelectData,
    input,
    innerPageNum,
    isEssential,
    setIsEct,
}) => {
    const [isOther, setIsOther] = useState(false);


    return(
        <div>
        <Wrap btnType={btnType}>
            {data.map((item, idx)=>{
                return <OverlapBtn
                            key={idx}
                            text={item}
                            id={idx}
                            data_num={data_num}
                            btnType={btnType}
                            isOverlap={isOverlap} maxNum={maxNum}
                            isNoneExist={isNoneExist}
                            selectData={selectData} setSelectData={setSelectData}
                            setIsOther={setIsOther}
                            innerPageNum={innerPageNum}
                            setIsEct={setIsEct}
                        />
            })}
        </Wrap> 
        { isOther && <OtherWrap>
            <Question
                quesNum={0}
                quesText={otherText}
                overlapText={isEssential? "필수" : "선택" }
            />
            <div style={{marginTop:'2.3rem'}}/>
            <InputBox
                text={inputText}
                input={input}
            />
            <div style={{marginTop:'3.6rem'}}/>
        </OtherWrap>}
        </div>
    )
}

const Wrap = styled.div`
    width: 32rem;
    display: grid;
    grid-template-columns: ${props=>(props.btnType===-1)? '1fr' 
        : (props.btnType===0)? '1fr 1fr' 
            : (props.btnType===1)? '1fr 1fr 1fr'
            : '1fr 1fr 1fr 1fr'};
    justify-items: center;
`;

const OtherWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 32rem;
    margin-top: 3.2rem;
`;