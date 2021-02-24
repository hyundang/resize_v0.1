import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, Rectangles } from "../../components/common";



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
                    quesTextOne={"평소 선호하는 바지의 핏을"}
                    quesTextTwo={"모두 골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <Rectangles 
                    data={user_datas} data_num={data_num}
                    isOverlap={true}
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