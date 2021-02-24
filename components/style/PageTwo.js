import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, Styles } from "../../components/common";



export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 브랜드/쇼핑몰의"}
                    quesTextTwo={"순서대로 골라주실래요?"}
                    overlapText={"최대 3개"}
                />
                <Styles data={user_datas}/>
                <div style={{marginBottom:'2.3rem'}}/>
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