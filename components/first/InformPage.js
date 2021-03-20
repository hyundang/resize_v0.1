import React from "react";
import styled from "styled-components";
// recoil
import { useRecoilState } from "recoil";
import { PageNumState } from "../../states/website_atom";
// components
import { Bottom } from "../../components";


export default () => {
    const [pageNum, setPageNum] = useRecoilState(PageNumState);

    return(
        <Wrap>
            <Header>참고사항</Header>
            <div style={{height:'7.4rem'}}/>
            <Text>"참고해주세요!"</Text>
            <div style={{height:'6.8rem'}}/>
            <Question>💡 소요시간</Question>
            <Detail>본 설문은 15분 이내로 소요될 예정입니다.</Detail>
            <div style={{height:'2.4rem'}}/>
            <Question>💡 설문절차</Question>
            <Detail>평소 스타일’과 ‘체형 정보’는 단 한 번만 응답해주시면 자동 저장되어 다음부터는 2분 이내로 코디를 요청하실 수 있어요!</Detail>
            <div style={{height:'2.4rem'}}/>
            <Question>💡 답변내용</Question>
            <Detail>고객님의 취향과 체형을 정밀하게 분석하기 위해 상세하게 질문을 드릴 예정이니 솔직하게 답변해주세요! 답변해주신 내용은 저희만 알고 있을게요! </Detail>
            <div style={{height:'4.5rem'}}/>
            <Bottom
                pageNum={pageNum}
                setPageNum={setPageNum}
                kategorie={-1} lastQuesNum={3}
                isLeftOkay={true}
                isRightOkay={true}
            />
        </Wrap>
    )
}

const Wrap = styled.div`
    margin-top: 8.3rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 8.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.16);
    background-color: white;
    font-size: 2rem;
    font-weight: bold;
    line-height: 4.5;
    letter-spacing: -0.5px;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
`;

const Text = styled.div`
    width: 32rem;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
`;

const Question = styled.div`
    width: 32rem;
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;

const Detail = styled.div`
    width: 32rem;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;