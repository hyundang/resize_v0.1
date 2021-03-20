import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, Loading } from "../../components";
import { Circles, Question } from "../../components/common";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { QuesSixState } from "../../states/style_atom";
import { SexState } from "../../states/website_atom";
// axios
import { getApi } from "../../lib/api";
// lib
import SortData from "../../lib/SortData";
// hooks
import useWindowSize from "../../hooks/useWindowSize";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    // for modal
    const [isShow, setIsShow] = useState(false);
    const size = useWindowSize();
    
    const sex = useRecoilValue(SexState);
    
    const [material, setMaterial] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        window.scrollTo(0,0);
        // 서버로 부터 데이터 받아오기
        getData();
    },[])

    const getData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const material_result = await getApi.getImgData('style', isMorF, 'Material');
        setMaterial(material_result.results);
        const sorted_data = await SortData(material_result.results);
        setMaterial(sorted_data);
        setIsLoading(false);
    }
    
    // 선택한 데이터가 담긴 배열
    const [selectData, setSelectData] = useRecoilState(QuesSixState);
    
    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(selectData.length!==0){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectData])
    

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
            <Icon width={size.width} onClick={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>?</Icon>
            {isShow &&
                <HelpBox width={size.width}>
                <span style={{fontWeight:'bold',fontSize:'1.4rem'}}>{"소재별 상품 예시:\n"}</span>
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>가죽:</span>
                {"\n가죽 라이더 자켓"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>앙고라:</span>
                {"\n앙고라 니트"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>나일론(비닐):</span>
                {"\n바람막이, 아노락"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>코듀로이:</span>
                {"\n골덴 바지"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>벨벳:</span>
                {"\n벨벳 자켓"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>린넨:</span>
                {"\n린넨(마) 셔츠"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>실크(새틴):</span>
                {"\n실크(새틴) 셔츠"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>트위드:</span>
                {"\n트위드 자켓"}
                <div style={{height:'0.8rem'}}/>
                <span style={{fontWeight:'bold'}}>플리스:</span>
                {"\n후리스 자켓"}
            </HelpBox>}
            {!isLoading?
                <>
                <Question
                    quesNum={quesNum}
                    quesText={"❌싫어하는❌ 옷의 소재"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'5.3rem'}}/>
                <Circles 
                    data={material}
                    // data={user_datas}
                    isThree={false} isOverlap={true}
                    isNoneExist={true}
                    selectData={selectData}
                    setSelectData={setSelectData}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                </>
                : <Loading/>
            }
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
    top: 18rem;
    left: ${props=>(props.width/10-32)/2+25}rem;
    @media screen and (min-width: 500px) {
        left: ${props=>(props.width/18-32)/2+25}rem;
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
    z-index: 2;
    top: 21.5rem;
    left: ${props=>(props.width/10-32)/2+17.5}rem;
    @media screen and (min-width: 500px) {
        left: ${props=>(props.width/18-32)/2+17.5}rem;
    }
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
        opacity: 0.83;
        border-color: rgba(121, 121, 121, 0);
        border-bottom-color: #797979;
        border-width: 1rem;
        margin-left: -1rem;
    }
`;