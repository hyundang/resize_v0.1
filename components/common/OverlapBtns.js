import React, { useState } from "react";
import styled from "styled-components";
// components
import OverlapBtnZero from "./OverlapBtnZero";
import OverlapBtnOne from "./OverlapBtnOne";
import OverlapBtn from "./OverlapBtn";

export default ({data, data_num, btnType, isOverlap, maxNum, isNoneExist}) => {
    const [selectData, setSelectData] = useState([]);
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
                    <OtherWrap isOther={isOther}>기타</OtherWrap>
                </Wrap> 
            )
        default:
            break;
    }
}

const Wrap = styled.div`
    width: 32rem;
    display: grid;
    grid-template-columns: ${props=>(props.btnType===-1)? '1fr' 
    : (props.btnType===0)? '1fr 1fr' 
    : '1fr 1fr 1fr'};
    justify-items: center;
`;

const OtherWrap = styled.div`
    display: ${props=>props.isOther? 'flex' : 'none'};
`;