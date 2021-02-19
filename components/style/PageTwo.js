import React, {useState} from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, Styles } from "../../components/common";



export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 브랜드/쇼핑몰의"}
                    quesTextTwo={"이름을 적어주실래요?"}
                    overlapText={"최대 3개"}
                />
                <Styles data={user_datas}/>
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
`;