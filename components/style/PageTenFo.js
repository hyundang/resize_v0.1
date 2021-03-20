import React, { useState, useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, Loading } from "../../components";
import { Question, Squares } from "../../components/common";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { QuesTenFiState } from "../../states/style_atom";
import { SexState } from "../../states/website_atom";
// api
import { getApi } from "../../lib/api";
// lib
import SortData from "../../lib/SortData";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    const sex = useRecoilValue(SexState);
    const [brand, setBrand] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        window.scroll(0, 0);
        getData();
    }, [])

    const getData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const brand_result = await getApi.getImgData('style', isMorF, 'Brand');
        setBrand(brand_result.results);
        const sorted_data = await SortData(brand_result.results);
        setBrand(sorted_data);
        setIsLoading(false);
    }

    // 선택한 데이터가 담긴 배열
    const [selectData, setSelectData] = useRecoilState(QuesTenFiState);

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
                <Question
                    quesNum={quesNum}
                    quesText={"평소 선호하는 브랜드"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <Squares
                    data={brand}
                    isOverlap={true}
                    isNoneExist={true}
                    isBorderLine={true}
                    selectData={selectData}
                    setSelectData={setSelectData}
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