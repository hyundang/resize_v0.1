import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question, OverlapBtns } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
import useWindowSize from "../../hooks/useWindowSize";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { CodyTagState, CodyOtherState } from "../../states/cody_atom";
import { VisitState, SexState } from "../../states/website_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    const [isShow, setIsShow] = useState(false);
    const size = useWindowSize();

    const [selectData, setSelectData] = useRecoilState(CodyTagState(0));
    const input = useRecoilInput(CodyOtherState(0));
    const isVisited = useRecoilValue(VisitState);
    const sex = useRecoilValue(SexState);

    const [isRightOkay, setIsRightOkay] = useState(false);
    const [isEct, setIsEct] = useState(false);

    // 다음 페이지로 넘어갈 수 있는지 판단
    useEffect(()=>{
        if(selectData.length!==0){
            if(isEct){
                if(input.value.length!==0){setIsRightOkay(true);}
                else{setIsRightOkay(false);}
            }
            else{
                setIsRightOkay(true);
            }
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectData, input.value])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
            <Wrap isVisited={isVisited.includes("네")}>
                <Icon width={size.width} onClick={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>?</Icon>
                {isShow&&((sex===0)?
                <HelpBox width={size.width}>
                    <span style={{fontWeight:'bold'}}>캐주얼:</span>
                    {"\n편안한, 스포티한, 귀여운"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>클래식포멀:</span>
                    {"\n단정한, 격식있는, 세련된"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>댄디베이직:</span>
                    {"\n깔끔한, 단정한, 심플한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>스트릿:</span>
                    {"\n힙한, 개성있는"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>빈티지:</span>
                    {"\n개성있는, 편한안, 따뜻한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>스포티:</span>
                    {"\n캐주얼한, 활동성있는, 편한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>프레피:</span>
                    {"\n통통튀는, 귀여운, 엘리트의"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>힙시크:</span>
                    {"\n힙한, 시크한, 개성있는"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>럭셔리:</span>
                    {"\n고급스러운, 화려한"}
                </HelpBox>  
                : <HelpBox width={size.width}>
                    <span style={{fontWeight:'bold'}}>캐주얼:</span>
                    {"\n편안한, 스포티한, 귀여운"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>클래식포멀:</span>
                    {"\n나이키, 아디다스 등"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>모던베이직:</span>
                    {"\n깔끔한, 단정한, 심플한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>로맨틱페미닌:</span>
                    {"\n단아한, 성숙한, 우아한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>러블리:</span>
                    {"\n러블리한, 귀여운, 사랑스러운"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>빈티지:</span>
                    {"\n개성있는, 편한안, 따뜻한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>스포티:</span>
                    {"\n캐주얼한, 활동성있는, 편한"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>섹시글램:</span>
                    {"\n섹시한, 화려한, 볼륨감있는"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>하이틴:</span>
                    {"\n러블리한, 발랄한, 하이틴의"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>힙시크:</span>
                    {"\n힙한, 시크한, 개성있는"}
                    <div style={{height:'0.8rem'}}/>
                    <span style={{fontWeight:'bold'}}>럭셔리:</span>
                    {"\n고급스러운, 화려한"}
                </HelpBox>)}
                <Question
                    quesNum={quesNum}
                    quesText={"코디로 연출하고 싶은 스타일"}
                    overlapText={"최대 3개"}
                />
                <div style={{width:'100%', height:'2.3rem'}}/>
                <OverlapBtns
                    data={user_datas} data_num={data_num}
                    btnType={1}
                    isOverlap={false} maxNum={3}
                    isNoneExist={false}
                    selectData={selectData} setSelectData={setSelectData}
                    otherText={"이외에 연출하고 싶은 스타일"}
                    inputText={"예) 락시크룩도 추천해주세요!"}
                    input={input}
                    isEssential={true}
                    setIsEct={setIsEct}
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
    margin-top: ${props=>props.isVisited? '11.6' : '4'}rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Icon = styled.div`
    position: absolute;
    top: 17.8rem;
    left: ${props=>(props.width/10-32)/2+27}rem;
    @media screen and (min-width: 500px) {
        left: ${props=>(props.width/18-32)/2+27}rem;
    }
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: #B9B9B9;
    text-align: center;
    line-height: 1.6;
    color: white;
    font-size: 1.2rem;
`;

const HelpBox = styled.div`
    position: absolute;
    z-index: 20;
    top: 21.5rem;
    left: ${props=>(props.width/10-32)/2+13}rem;
    @media screen and (min-width: 500px) {
        left: ${props=>(props.width/18-32)/2+12}rem;
    }
    width: 20rem;
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
        left: 75%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        opacity: 0.83;
        border-color: rgba(121, 121, 121, 0);
        border-bottom-color: #797979;
        border-width: 1rem;
        margin-left: -1rem;
    }
`;