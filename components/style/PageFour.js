import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question, Styles } from "../../components/common";
// recoil
import { useRecoilState } from "recoil";
import { QuesFourState } from "../../states/style_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    // 선택한 데이터가 담긴 배열(1순위: index=0, 2순위: index=1..) ex)[3,11,9]-> 1순위는 id=3인 이미지
    const [selectData, setSelectData] = useRecoilState(QuesFourState);
    
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
                <Question
                    quesNum={quesNum}
                    quesText={"평소 시도해보고 싶은 스타일"}
                    overlapText={"최대 3개"}
                />
                <Styles 
                    data={user_datas}
                    selectData={selectData}
                    setSelectData={setSelectData}
                />
                <div style={{marginBottom:'2.3rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isLeftOkay={true} isRightOkay={isRightOkay}
                isBlur={true}
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
