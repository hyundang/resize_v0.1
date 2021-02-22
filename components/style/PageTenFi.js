import React, {useState} from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { OverlapBtns, QuestionTwo } from "../../components/common";




export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
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
                />
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
