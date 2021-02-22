import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo } from "../../components/common";



export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 착용하는"}
                    quesTextTwo={"상의 사이즈는 무엇인가요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <QuestionTwo
                    quesNum={0}
                    quesTextOne={"평소 착용하는"}
                    quesTextTwo={"바지 사이즈는 무엇인가요?"}
                    overlapText={"중복선택"}
                />
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
