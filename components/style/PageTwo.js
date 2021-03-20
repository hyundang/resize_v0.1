import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question, Styles } from "../../components/common";
// recoil
import { useRecoilState } from "recoil";
import { QuesTwoState } from "../../states/style_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    // 선택한 데이터가 담긴 배열(1순위: index=0, 2순위: index=1..) ex)[3,11,9]-> 1순위는 id=3인 이미지
    const [selectData, setSelectData] = useRecoilState(QuesTwoState);
    
    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(selectData.length!==0){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectData])

    // useEffect(()=>{
    //     console.log(selectData);
    // },[selectData])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"평소에 자주 입는 스타일 순위"}
                    overlapText={"최대 3개"}
                />
                <div style={{width:'32rem',marginTop:'0.5rem',fontSize:'1.2rem',lineHeight:'1.67',color:'#707070',textAlign:'left'}}>
                    선택하신 스타일대로 코디를 전달해드리는 것이 아닌, 취향 참고용으로만 사용되니 본인의 취향과 가장 가까운 선택지를 선택해주세요!
                </div>
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