import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, Loading } from "../../components";
import { Circles, Question } from "../../components/common";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { CodyColorstate } from "../../states/cody_atom";
import { SexState, VisitState } from "../../states/website_atom";
// axios
import { getApi } from "../../lib/api";
// lib
import SortData from "../../lib/SortData";
import { QuesTenState } from "../../states/style_atom";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    const sex = useRecoilValue(SexState);
    const colorData = useRecoilValue(QuesTenState);

    const [color, setColor] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        window.scrollTo(0,0);
        // 서버로 부터 데이터 받아오기
        getData();
        if(selectData.length===0){
            setSelectData(colorData);
        }
    },[])
    
    const getData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const color_result = await getApi.getColor();
        setColor(color_result.results);
        const sorted_data = await SortData(color_result.results);
        setColor(sorted_data);
        setIsLoading(false);
    }
    
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
            {!isLoading?
                <> 
                <Question
                    quesNum={quesNum}
                    quesText={"코디에 포함하고 싶은 컬러"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.4rem'}}/>
                <Circles 
                    data={color}
                    isColor={true}
                    // data={user_datas}
                    isThree={false} isOverlap={true}
                    isNoneExist={true}
                    selectData={selectData} setSelectData={setSelectData}
                />
                <div style={{height:'3.6rem'}}/>
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
    margin-top: ${props=>props.isVisited? '11.6' : '4'}rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
