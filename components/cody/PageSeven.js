import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { InputBoxBig, QuestionTwo, Question } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// recoil
import { useRecoilState } from "recoil";
import { CodyOtherState } from "../../states/cody_atom";



export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    // input 여러 개 만들기
    const inputOne = useRecoilInput(CodyOtherState(7));
    const inputTwo = useRecoilInput(CodyOtherState(8));


    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"해당 코디에 꼭 포함하고"}
                    quesTextTwo={"싶은 상품이 있을까요?"}
                    overlapText={"선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig
                    text={"예) 뽀얀 흰색의 양털 후리스, 워싱이 없는 진청 색상의 청바지는 꼭 포함하고 싶어요!"}
                    input={inputOne}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <QuestionTwo
                    quesNum={0}
                    quesTextOne={"참고하고 싶은 코디 사진이"}
                    quesTextTwo={"있다면 업로드 해주실래요?"}
                    overlapText={"선택"}
                />
                {/* 사진 업로드 기능 들어가기 */}
                <div style={{marginBottom:'3.6rem'}}/>
                <Question
                    quesNum={0}
                    quesText={"이밖의 요청사항이 있으신가요?"}
                    overlapText={"선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig
                    text={"예) 연예인 이동휘나 류준열 느낌의 코디를 추천해주세요!"}
                    input={inputTwo}
                />
                <div style={{marginBottom:'3.6rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                lastQuesNum={lastQuesNum} kategorie={2}
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