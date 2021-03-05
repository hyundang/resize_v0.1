import React, { useEffect, useState } from "react";
import styled from 'styled-components';
// assets
import gray_arrow_left from "../assets/img/icons/gray_arrow_left.svg";
import gray_arrow_right from "../assets/img/icons/gray_arrow_right.svg";
import black_arrow_left from "../assets/img/icons/black_arrow_left.svg";
import black_arrow_right from "../assets/img/icons/black_arrow_right.svg";
// router
import { useRouter } from "next/router";
// recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { StylePageNumState } from "../states/style_atom";
import { SizePageNumState } from "../states/size_atom";
import { VisitState } from "../states/website_atom";


export default ({
    setPageNum, pageNum, 
    isCody, setInnerPageNum, innerPageNum, lastInnerPageNum,
    lastQuesNum, kategorie,
    isLeftOkay, isRightOkay
}) => {
    const router = useRouter();
    const setStlyePageNum = useSetRecoilState(StylePageNumState);
    const setSizePageNum = useSetRecoilState(SizePageNumState);

    const isVisited = useRecoilValue(VisitState);

    const [isLeftActive, setIsLeftActive] = useState(false);
    const [isRightActive, setIsRightActive] = useState(false);

    useEffect(()=>{
        if(isLeftOkay){
            setIsLeftActive(true);
        }
    }, [])

    useEffect(()=>{
        if(isRightOkay){
            setIsRightActive(true);
        }
        else{
            setIsRightActive(false);
        }
    }, [isRightOkay])
    

    const handleLastPage = () => {
        switch (kategorie) {
            case -1:
                // 이미 저장되어있는 유저 전화번호일때
                // 서버로 부터 데이터 받아오기.
                // 그 후 recoil에 받아온 데이터들 저장.
                // 그 후 router.push();
                setStlyePageNum(1);
                setSizePageNum(1);
                router.push('/website_dev/cody');
                break;
            case 0:
                router.push('/website_dev/size');
                break;
            case 1:
                router.push('/website_dev/cody');
                break;
            case 2:
                if(isVisited.includes("네")){
                    router.push('/website_dev/last');
                }
                else{
                    router.push('/website_dev/result');
                }
                break;
            case 3:
                break;
            default:
                break;
        }
    }
    
    return(
        <>
        <Wrap>
            <BtnWrap 
                onClick={
                    isLeftActive?
                        (isCody&(innerPageNum!==0)? 
                            ()=>setInnerPageNum(innerPageNum-1) 
                            :() => setPageNum(pageNum-1))
                    :()=>{}}
                pageNum={pageNum}
            >
                <BtnIcon src={(isLeftActive)? black_arrow_left : gray_arrow_left}/>
                <BtnText isActive={isLeftActive}>이전</BtnText>
            </BtnWrap>
            <Space pageNum={pageNum}/>
            <BtnWrap 
                onClick={
                    isRightActive?
                    ((lastQuesNum===pageNum)?
                        handleLastPage
                        :(isCody&(innerPageNum!==lastInnerPageNum)?
                            ()=>setInnerPageNum(innerPageNum+1)
                            :() => setPageNum(pageNum+1)))
                    : ()=>{}
                }
                pageNum={0}
            >
                <BtnText isActive={isRightActive}>다음</BtnText>
                <BtnIcon src={isRightActive? black_arrow_right : gray_arrow_right}/>
            </BtnWrap>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 8.6rem;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.off_white};
    /* box-shadow: 0 0 1rem 1rem rgba(255,255,255,1);  */
`;

const Space = styled.div`
    width: 8rem;
    height: 5.2rem;
    display: ${props=>(props.pageNum===1)? 'box': 'none'};
`;

const BtnWrap = styled.div`
    width: 8rem;
    height: 5.2rem;
    display: ${props=>(props.pageNum===1)? 'none' : 'flex'};
    flex-direction: row;
    align-items: center;
`;

const BtnText = styled.div`
    font-size: 1.6rem;
    color: ${props=>props.isActive? ({theme}) => theme.colors.black : ({theme}) => theme.colors.brown_grey};
    font-weight: bold;
    line-height: 1.6rem;
`;

const BtnIcon = styled.img`
    width: 5rem;
`;