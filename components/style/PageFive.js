import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Circles, QuestionTwo } from "../../components/common";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { QuesFiveState } from "../../states/style_atom";
import { SexState } from "../../states/website_atom";
// axios
import { getApi } from "../../lib/api";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    const sex = useRecoilValue(SexState);
    
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        window.scrollTo(0,0);
        // 서버로 부터 데이터 받아오기
        getData();
    },[])

    const getData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const detail_result = await getApi.getImgData('style', isMorF, 'Detail');
        setDetail(detail_result.results);
        setIsLoading(false);
    }
    
    // 선택한 데이터가 담긴 배열(1순위: index=0, 2순위: index=1..) ex)[3,11,9]-> 1순위는 id=3인 이미지
    const [selectData, setSelectData] = useRecoilState(QuesFiveState);
    
    const [isRightOkay, setIsRightOkay] = useState(false);

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
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
            {!isLoading? 
                <>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"다음 중 ❌싫어하는❌ 옷의"}
                    quesTextTwo={"디테일/패턴을 모두 골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'5.3rem'}}/>
                <Circles 
                    data={detail}
                    // data={user_datas}
                    isThree={false} isOverlap={true}
                    isNoneExist={true}
                    selectData={selectData}
                    setSelectData={setSelectData}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                </>
                : <div>로딩중...</div>
            }
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isLeftOkay={true} isRightOkay={isRightOkay}
            />
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
