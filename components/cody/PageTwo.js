import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, OverlapBtns } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { CodyTagState, CodyOtherState } from "../../states/cody_atom";
import { VisitState } from "../../states/website_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])


    const [selectData, setSelectData] = useRecoilState(CodyTagState(0));
    const input = useRecoilInput(CodyOtherState(0));
    const isVisited = useRecoilValue(VisitState);
    // useEffect(()=>{
    //     console.log(selectData);
    // }, [selectData])
    const [isRightOkay, setIsRightOkay] = useState(false);

    const [isEct, setIsEct] = useState(false);

    // 다음 페이지로 넘어갈 수 있는지 판단
    useEffect(()=>{
        if(selectData.length!==0){
            if(isEct){
                if(input.value.length!==0){setIsRightOkay(true);}
                else{setIsRightOkay(false);}
            }
            else{
                setIsRightOkay(true);
            }
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectData, input.value])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
            <Wrap isVisited={isVisited.includes("네")}>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"해당 코디로 연출하고 싶은"}
                    quesTextTwo={"스타일을 선택해주실래요?"}
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
                    inputText={"예) 락시크룩도 추천해주세요!"}
                    input={input}
                    isEssential={true}
                    setIsEct={setIsEct}
                />
                <div style={{marginBottom:'3.6rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isRightOkay={isRightOkay}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: ${props=>props.isVisited? '11.6' : '4'}rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;