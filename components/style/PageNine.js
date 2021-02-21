import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, Squares } from "../../components/common";



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
                    quesTextOne={"평소 자주 착용하는 옷의"}
                    quesTextTwo={"색상톤을 모두 골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <Squares
                    data={user_datas} data_num={data_num}
                    isOverlap={true} maxNum={0}
                    isNoneExist={false}
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