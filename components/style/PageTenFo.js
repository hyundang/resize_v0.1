import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, Loading } from "../../components";
import { QuestionTwo, Squares } from "../../components/common";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { QuesTenFoState } from "../../states/style_atom";
import { SexState } from "../../states/website_atom";
// axios
import { getApi } from "../../lib/api";
// lib
import SortData from "../../lib/SortData";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    const sex = useRecoilValue(SexState);
    
    const [topLength, setTopLength] = useState([]);
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
        const topLength_result = await getApi.getImgData('style', isMorF, 'Top_Length');
        setTopLength(topLength_result.results);
        const sorted_data = await SortData(topLength_result.results);
        setTopLength(sorted_data);
        setIsLoading(false);
    }

    
    // 선택한 데이터가 담긴 배열
    const [selectData, setSelectData] = useRecoilState(QuesTenFoState)
    

    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(selectData.length!==0){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
        // console.log(selectData)
    }, [selectData])
    
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
            {!isLoading?
                <>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 상의 기장을"}
                    quesTextTwo={"골라주실래요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <Squares 
                    data={topLength}
                    // data={user_datas} 
                    isOverlap={true} maxNum={0}
                    isBorderLine={true}
                    selectData={selectData} setSelectData={setSelectData}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                </>
                : <Loading/>
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