import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Circles, QuestionTwo } from "../../components/common";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { CodyColorstate } from "../../states/cody_atom";
import { VisitState } from "../../states/website_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    const [selectData, setSelectData] = useRecoilState(CodyColorstate(0));
    const isVisited = useRecoilValue(VisitState);

    const [isRightOkay, setIsRightOkay] = useState(false);

    // 다음 페이지로 넘어갈 수 있는지 판단
    useEffect(()=>{
        if(selectData.length!==0){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectData])


    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
            <Wrap isVisited={isVisited.includes("네")}>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"해당 코디에 포함하고 싶은"}
                    quesTextTwo={"메인 컬러를 모두 골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.4rem'}}/>
                <Circles 
                    data={user_datas} data_num={data_num} 
                    isThree={false} isOverlap={true}
                    isNoneExist={true}
                    selectData={selectData} setSelectData={setSelectData}
                />
                <div style={{height:'3.6rem'}}/>
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
