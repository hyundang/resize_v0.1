import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { OverlapBtns, Question, QuestionTwo } from "../../components/common";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { CodyTagState, CodyOneTagState } from "../../states/cody_atom";
import { VisitState } from "../../states/website_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const [selectDataOne, setSelectDataOne] = useRecoilState(CodyTagState(7));
    const [selectDataTwo, setSelectDataTwo] = useRecoilState(CodyOneTagState(0));
    const [selectDataThree, setSelectDataThree] = useRecoilState(CodyOneTagState(1));

    const isVisited = useRecoilValue(VisitState);

    const [isRightOkay, setIsRightOkay] = useState(false);

    // 다음 페이지로 넘어갈 수 있는지 판단
    useEffect(()=>{
        if(selectDataOne.length!==0 & selectDataTwo.length!==0 & selectDataThree.length!==0){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectDataOne, selectDataTwo, selectDataThree])

    // useEffect(()=>{
    //     console.log(selectDataThree);
    // },[selectDataThree])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
             {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
            <Wrap isVisited={isVisited.includes("네")}>
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
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isLeftOkay={true} isRightOkay={isRightOkay}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: ${props=>props.isVisited? '11.6' : '4'}rem;    
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
