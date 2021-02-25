import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, Squares } from "../../components/common";
// recoil
import { useRecoilState } from "recoil";
import { QuesTenTrState } from "../../states/style_atom";



export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    const [selectData, setSelectData] = useRecoilState(QuesTenTrState)

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 바지 허리의 위치를"}
                    quesTextTwo={"골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <Squares 
                    data={user_datas} data_num={data_num}
                    isOverlap={true} maxNum={0}
                    isNoneExist={false}
                    selectData={selectData} setSelectData={setSelectData}
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