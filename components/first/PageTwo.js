import React from "react";
import styled from "styled-components";
// recoil
import { useSetRecoilState, useRecoilState } from "recoil";
import { VisitState, PageNumState } from "../../states/website_atom";
// components
import { OverlapBtns } from "../../components/common";
import { Bottom } from "../../components";

const question = ["네, 처음이에요!", "아니요, 해본 적 있어요!"];

export default () => {
    const [pageNum, setPageNum] = useRecoilState(PageNumState);
    const [isVisited, setVisited] = useRecoilState(VisitState);

    return(
        <Wrap>
            <Header>STYLING ROOM</Header>
            <div style={{height:'7.9rem'}}/>
            <Text>{"\" 리사이즈 스타일링룸에\n첫 방문이신가요? \" "}</Text>
            <div style={{height:'7.6rem'}}/>
            <OverlapBtns
                data={question}
                data_num={2}
                btnType={-1}
                isOverlap={false}
                isNoneExist={false}
                selectData={isVisited} setSelectData={setVisited}
            />
            <Bottom
                pageNum={pageNum}
                setPageNum={setPageNum}
            />
        </Wrap>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 11.6rem;
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
    white-space: pre-line;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
`;