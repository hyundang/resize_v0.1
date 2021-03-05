import React, { useState, useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { OverlapBtns, QuestionTwo } from "../../components/common";
// hooks
import useWindowSize from "../../hooks/useWindowSize";
// recoil
import { useRecoilState } from "recoil";
import { QuesTenFiState } from "../../states/style_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scroll(0, 0);
    }, [])
    
    const [isShow, setIsShow] = useState(false);
    const size = useWindowSize();

    // 선택한 데이터가 담긴 배열
    const [selectData, setSelectData] = useRecoilState(QuesTenFiState);
    
    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(selectData.length!==0){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectData])
    
    
    // useEffect(()=>{
    //     console.log(selectData);
    // }, [selectData])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Icon width={size.width} onClick={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>?</Icon>
                {isShow&&
                <HelpBox width={size.width}>
                    <span style={{fontWeight:'bold'}}>SPA 브랜드:</span>
                    {"\nH&M, 지오다노, 유니클로 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>아웃도어 브랜드:</span>
                    {"\n나이키, 아디다스 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>디자이너 브랜드:</span>
                    {"\nLMC, 커버낫, 앤더슨벨 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>고가 디자이너 브랜드:</span>
                    {"\n춘자, 우영미 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>남성복 브랜드:</span>
                    {"\n반스, 닥스 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>보세(브랜드 없는):</span>
                    {"\n인터넷쇼핑몰, 지하상가 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>하이엔드(명품) 브랜드:</span>
                    {"\n구찌, 발렌시아가 등"}
                </HelpBox>}
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 브랜드를"}
                    quesTextTwo={"골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <OverlapBtns
                    data={user_datas} data_num={data_num}
                    btnType={0}
                    isOverlap={true} maxNum={0}
                    isNoneExist={true}
                    selectData={selectData} setSelectData={setSelectData}
                />
                <div style={{marginBottom:'3.6rem'}}/>
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

const Icon = styled.div`
    position: absolute;
    top: 17.3rem;
    left: ${props=>(props.width/10-32)/2+17.8}rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
    background-color: #B9B9B9;
    text-align: center;
    color: white;
`;

const HelpBox = styled.div`
    position: absolute;
    z-index: 2;
    top: 20.7rem;
    left: ${props=>(props.width/10-32)/2+10.1}rem;
    width: 17rem;
    padding: 1.1rem 1.6rem;
    opacity: 0.83;
	background: #797979;
    border-radius: 0.8rem;
    color: white;
    font-size: 1.1rem;
    font-weight: normal;
    white-space: pre-line;
    ::after{
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(121, 121, 121, 0);
        border-bottom-color: #797979;
        border-width: 1rem;
        margin-left: -1rem;
    }
`;