import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { OverlapBtns, Question, QuestionTwo } from "../../components/common";
// recoil
import { useRecoilState } from "recoil";
import { CodyTagState, CodyOneTagState } from "../../states/cody_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const [selectDataOne, setSelectDataOne] = useRecoilState(CodyTagState(7));
    const [selectDataTwo, setSelectDataTwo] = useRecoilState(CodyOneTagState(0));
    const [selectDataThree, setSelectDataThree] = useRecoilState(CodyOneTagState(1));

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={user_datas[0].question[0]}
                    quesTextTwo={user_datas[0].question[1]}
                    overlapText={user_datas[0].question[2]}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <OverlapBtns
                    data={user_datas[0].datas} 
                    data_num={user_datas[0].datas.length}
                    btnType={0}
                    isOverlap={true} isNoneExist={false}
                    selectData={selectDataOne}  setSelectData={setSelectDataOne}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <QuestionTwo
                    quesNum={0}
                    quesTextOne={user_datas[1].question[0]}
                    quesTextTwo={user_datas[1].question[1]}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <OverlapBtns
                    data={user_datas[1].datas}
                    data_num={user_datas[1].datas.length}
                    btnType={-1}
                    isOverlap={false} maxNum={1} 
                    isNoneExist={false}
                    selectData={selectDataTwo}  setSelectData={setSelectDataTwo}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <Question
                    quesNum={0}
                    quesText={user_datas[2].question[0]}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <OverlapBtns
                    data={user_datas[2].datas}
                    data_num={user_datas[2].datas.length}
                    btnType={-1}
                    isOverlap={false} maxNum={1}
                    isNoneExist={false}
                    selectData={selectDataThree}  setSelectData={setSelectDataThree}
                />
                <div style={{marginBottom:'3.6rem'}}/>
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
