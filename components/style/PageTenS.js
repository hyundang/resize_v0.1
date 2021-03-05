import React, {useEffect, useState} from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { OverlapBtns, QuestionTwo, InputBox, Question } from "../../components/common";
// hooks
// import useInput from "../../hooks/useInput";
import useRecoilInput from "../../hooks/useRecoilInput";
// recoil
import { useRecoilState } from "recoil";
import { SiteState, BrandNameState, SiteNameState } from "../../states/style_atom";


export default ({
    quesNum, lastQuesNum, setPageNum, 
    user_datas, data_num, 
    inputTextOne, inputTextTwo
}) => {
    const brand_data = useRecoilInput(BrandNameState);
    const site_data = useRecoilInput(SiteNameState);

    const [selectData, setSelectData] = useRecoilState(SiteState);
    

    useEffect(()=>{
        window.scroll(0, 0);
    }, [])

    // useEffect(()=>{
    //     console.log(selectData);
    // },[selectData])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 브랜드/쇼핑몰의"}
                    quesTextTwo={"이름을 적어주실래요?"}
                />
                <Text>최대한 다양하게 적어주세요!</Text>
                <InputBox
                    text={inputTextOne}
                    input={brand_data}
                />
                <div style={{width:'100vw', height:'3.6rem'}}/>
                <QuestionTwo
                    quesNum={0}
                    quesTextOne={"온라인으로 옷을 구매 시 어떤"}
                    quesTextTwo={"사이트/플랫폼을 이용하시나요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3rem'}}/>
                <OverlapBtns
                    data={user_datas} data_num={data_num}
                    btnType={1}
                    isOverlap={true} maxNum={0}
                    isNoneExist={true}
                    selectData={selectData} setSelectData={setSelectData}
                />
                <div style={{width:'100vw', height:'2.5rem'}}/>
                <Question
                    quesNum={0}
                    quesText={"이 외에 이용하는 사이트를 알려주세요!"}
                    overlapText={"선택"}
                />
                <div style={{width:'100vw', height:'1.9rem'}}/>
                <InputBox
                    text={inputTextTwo}
                    input={site_data}
                />
                <div style={{width:'100vw', height:'5rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                lastQuesNum={lastQuesNum} kategorie={0}
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

const Text = styled.div`
    width: 32rem;
    height: 1.9rem;
    margin-top: 1rem;
    margin-bottom: 2.3rem;
    font-size: 1.2rem;
    text-align: left;
    color: #707070;
`;