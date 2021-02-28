import React, { useState } from "react";
import styled from "styled-components";
// components
import { InputBox, QuestionTwo, OverlapBtn, OverlapBtnTwo, OverlapBtnOne, OverlapBtnZero } from ".";
// hooks
import useInput from "../../hooks/useInput";

export default ({
    data, data_num, 
    btnType, 
    isOverlap, maxNum, 
    isNoneExist,
    otherTextOne, otherTextTwo, inputText,
    selectData, setSelectData
}) => {
    const input = useInput("");
    const [isNoneClicked, setIsNoneClicked] = useState(false);
    const [isOther, setIsOther] = useState(false);

    switch (btnType) {
        case -1:
            return(
                <Wrap btnType={btnType}>
                    {data.map((item, idx)=>{
                        return <OverlapBtn
                                    key={idx}
                                    text={item}
                                    id={idx}
                                    data_num={data_num}
                                    isOverlap={isOverlap} maxNum={maxNum}
                                    isNoneExist={isNoneExist}
                                    selectData={selectData} setSelectData={setSelectData}
                                    isNoneClicked={isNoneClicked} setIsNoneClicked={setIsNoneClicked}
                                    setIsOther={setIsOther}
                                />
                    })}
                    <OtherWrap isOther={isOther}>기타</OtherWrap>
                </Wrap> 
            )
        case 0:
            return(
                <Wrap btnType={btnType}>
                    {data.map((item, idx)=>{
                        return <OverlapBtnZero
                                    key={idx}
                                    text={item}
                                    id={idx}
                                    data_num={data_num}
                                    isOverlap={isOverlap} maxNum={maxNum}
                                    isNoneExist={isNoneExist}
                                    selectData={selectData} setSelectData={setSelectData}
                                    isNoneClicked={isNoneClicked} setIsNoneClicked={setIsNoneClicked}
                                    setIsOther={setIsOther}
                                />
                    })}
                    <OtherWrap isOther={isOther}>기타</OtherWrap>
                </Wrap> 
            )
        case 1:
            return(
                <div>
                <Wrap btnType={btnType}>
                    {data.map((item, idx)=>{
                        return <OverlapBtnOne
                                    key={idx}
                                    text={item}
                                    id={idx}
                                    data_num={data_num}
                                    isOverlap={isOverlap} maxNum={maxNum}
                                    isNoneExist={isNoneExist}
                                    selectData={selectData} setSelectData={setSelectData}
                                    isNoneClicked={isNoneClicked} setIsNoneClicked={setIsNoneClicked}
                                    setIsOther={setIsOther}
                                />
                    })}
                </Wrap> 
                <OtherWrap isOther={isOther}>
                    <QuestionTwo
                        quesNum={0}
                        quesTextOne={otherTextOne}
                        quesTextTwo={otherTextTwo}
                        overlapText={"선택"}
                    />
                    <div style={{marginTop:'2.3rem'}}/>
                    <InputBox
                        text={inputText}
                        input={input}
                    />
                    <div style={{marginTop:'3.6rem'}}/>
                </OtherWrap>
                </div>
            )
        default:
            return(
                <Wrap btnType={btnType}>
                    {data.map((item, idx)=>{
                        return <OverlapBtnTwo
                                    key={idx}
                                    text={item}
                                    id={idx}
                                    selectData={selectData} setSelectData={setSelectData}
                                />
                    })}
                </Wrap> 
            )
            break;
    }
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
    display: ${props=>props.isOther? 'flex' : 'none'};
    flex-direction: column;
    width: 32rem;
    margin-top: 6.2rem;
`;