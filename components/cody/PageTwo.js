import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, OverlapBtns } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// recoil
import { useRecoilState } from "recoil";
import { CodyTagState, CodyOtherState } from "../../states/cody_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    const [selectData, setSelectData] = useRecoilState(CodyTagState(1));
    const input = useRecoilInput(CodyOtherState(1));


    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"해당 코디를 어떻게"}
                    quesTextTwo={"활용하실건가요?"}
                    overlapText={"최대 3개"}
                />
                <div style={{width:'100%', height:'3.6rem'}}/>
                <OverlapBtns
                    data={user_datas} data_num={data_num}
                    btnType={1}
                    isOverlap={false} maxNum={3}
                    isNoneExist={false}
                    selectData={selectData} setSelectData={setSelectData}
                    otherTextOne={"이외에 연출하고 싶은"}
                    otherTextTwo={"스타일이 있다면 알려주세요!"}
                    inputText={"예) 상견례룩을 추천해주세요!"}
                    input={input}
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
    align-items: flex-start;
`;