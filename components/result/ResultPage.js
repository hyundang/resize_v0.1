import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, ClothesBox } from "./common";
import { RatioStep } from "../common";
// hooks
import useInput from "../../hooks/useInput";
// recoil
import { useSetRecoilState } from "recoil";
import { DetailPageNumState } from "../../states/result_atom"


const data = ["0%", "25%", "50%", "75%", "100%"];

export default () => {
    const input = useInput("");
    const [selectData, setSelectData] = useState(-1);

    const [innerPageNum, setInnerPageNum] = useState(1);
    const setPageNum = useSetRecoilState(DetailPageNumState);


    useEffect(()=>{
        window.scroll(0,0);
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header text={"코디 큐레이션 결과"}/>
            <Wrap>
                <div style={{width:'32rem'}}>
                <Title>나의 정보</Title>
                </div>
                <div style={{height:'2.6rem'}}/>
                <InfoBox style={{height:'18rem'}}>
                    <Info 
                        textone={"키"} texttwo={`${160}cm`} 
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"몸무게"} texttwo={`${45}kg`}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"체형 장점"} texttwo={"다리가 얇아요얇아요얇아요얇아요ㅇㅇㅇㅇ"}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"체형 단점"} texttwo={"허리가 두꺼워요"}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"요청 코디"} texttwo={"캐주얼 캠퍼스룩"}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"요청 가격"} texttwo={"10,000~50,000"}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                </InfoBox>
                <div style={{height:'3rem'}}/>
                <div style={{width:'100vw',height:'1.1rem',background:'#2b2b2b',opacity:'0.11'}}/>
                <div style={{height:'3.2rem'}}/>
                <Title>LOOK {innerPageNum}</Title>
                <div style={{height:'3.5rem'}}/>
                <img style={{width:'22.6rem',height:'22.6rem'}}/>
                <div style={{height:'4.5rem'}}/>
                <InfoBox>
                    <Info 
                        textone={"코디 조합"} texttwo={"상의+바지"}
                        widthone={"11rem"} widthtwo={"6rem"}
                    />
                    <Info 
                        textone={"총 가격"} texttwo={"150,000"}
                        widthone={"11rem"} widthtwo={"6rem"}
                    />
                </InfoBox>
                <div style={{height:'3.6rem'}}/>
                <ExplainBox 
                    value={"편안하고 따뜻한 느낌의 캐주얼한 데일리, 데이트룩 소개해드립니다! 상의로는 v자로 파인 브이넥 니트를 골라봤는데요, 목이 짧은게 고민이시라면 목 부분이 더드러나는 v넥을 추천드려요. 추천드리는 니트는 랩 형식으로 되어 있어, 밋밋해보일 수 있는 룩에 포인트를 더해준답니다. 허리 부분은 슬림한 실루엣을 가지고 있어서 고민되시는 뱃살도 커버하실 수 있을 거예요! ◡̈ 추천드리는 치마는 브라운 색상의 코듀로이 플리츠 스커트입니다. 코듀로이 소재 그 자체만으로도 유니크한 포인트가 되어주는데요, 세로선이 있는 코듀로이 소재는 다리가 길어보이고 얇아보이는 착시효과까지 준답니다!"}
                    readOnly={true}  
                />
                <div style={{height:'3.6rem'}}/>
                <TitleLineNone>코디 큐레이션 상품 정보</TitleLineNone>
                <div style={{height:'2rem'}}/>
                {/* 코디 개수만큼 나오기->map사용 */}
                <ClothesBox/>
                <ClothesBox/>
                <div style={{height:'3.6rem'}}/>
                <TitleLineNone>코디 {innerPageNum}은 원하는 스타일과 어느정도 일치하나요?</TitleLineNone>
                <div style={{height:'2rem'}}/>
                <RatioStep
                    data={data}
                    selectData={selectData}
                    setSelectData={setSelectData}
                />
                <div 
                    style={{width:'31.5rem',
                    display:'flex',flexDirection:'row',justifyContent:'space-between',
                    fontSize:'1.2rem', color:'#191919', fontWeight:'bold', textAlign:'left'
                }}>
                    <span>최악!</span>
                    <span>완벽!</span>
                </div>
                <div style={{height:'3.6rem'}}/>
                <TitleLineNone style={{marginBottom:'0.5rem'}}>
                    이와 같이 답변하신 이유가 무엇인가요?
                </TitleLineNone>
                <div style={{width:'32rem',fontSize:'1.2rem', color:'#191919', letterSpacing:'-0.3px', textAlign:'left'}}>
                    의견을 반영하여 다음에는 더 만족스러운 코디를 준비해드릴게요!
                </div>
                <div style={{height:'2rem'}}/>
                <InputBox
                    placeholder={"부츠컷 슬랙스를 안 좋아해서 아쉬웠어요. 다른 부분은 다 만족스럽습니다!"}
                    value={input.value}
                    onChange={input.onChange}    
                />
                {(innerPageNum===2)&&
                <>
                    <div style={{height:'2rem'}}/>
                    <TitleLineNone style={{marginBottom:'0.5rem',fontSize:'1.35rem',lineHeight:'2.2rem',whiteSpace:'pre-line'}}>
                        {"코디 큐레이션에 불만족하셨나요?\n코디가 마음에 안 드셨다면 1회에 한해 재요청이 가능해요!"}
                    </TitleLineNone>
                    <div style={{height:'3rem'}}/>
                    <RequestBtn onClick={()=>setPageNum(1)}>코디 큐레이션 재요청하기</RequestBtn>
                </>}
                <div style={{height:'7rem'}}/>
            </Wrap>
            <Bottom 
                text={(innerPageNum===1)?"다음 코디 보러가기":"이전 코디 보러가기"}
                onClick={(innerPageNum===1)?()=>setInnerPageNum(2):()=>setInnerPageNum(1)}
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

const Title = styled.div`
    width: 6rem;
    height: 2.4rem;
    border-bottom: solid 0.4rem #f5f2ec;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.7rem;
    letter-spacing: -0.4px;
    color: ${({theme})=>theme.colors.black};
`;

const TitleLineNone = styled.div`
    width: 32rem;
    height: 2rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.7rem;
    letter-spacing: -0.4px;
    color: ${({theme})=>theme.colors.black};
`;

const InfoBox = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    text-align: left;
    letter-spacing: 0px;
    color: ${({theme})=>theme.colors.black};
`;

const Info = ({textone, texttwo, widthone, widthtwo}) => {
    return(
        <div style={{display:'flex',flexDirection:'row'}}>
            <Type style={{width:`${widthone}`}}>{textone}</Type>
            <Data style={{width:`${widthtwo}`}}>{texttwo}</Data>
        </div>
    )
}

const Type = styled.div`
    height: 3rem;
    font-weight: bold;
`;

const Data = styled.div`
    height: 3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ExplainBox = styled.textarea`
    width: 32rem;
    height: 15.5rem;
    padding: 1.4rem 1.8rem;
    background-color: #f8f8f8;
    border-radius: 0.4rem;
    border: none;
    font-family: 'Noto Sans KR';
    font-size: 1.4rem;
    line-height: 1.86;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
    &:focus{
        outline: none;
    }
`;

const InputBox = styled.textarea`
    width: 32rem;
    height: 15.4rem;
    padding: 1.3rem 1.7rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: white;
    font-family: "Noto Sans KR";
    font-size: 1.4rem;
    text-align: left;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const RequestBtn = styled.div`
    width: 32rem;
    height: 5.3rem;
    border-radius: 0.5rem;
    background-color: #e6e6e6;
    font-size: 1.4rem;
    text-align: center;
    line-height: 5.1rem;
    color: white;
`;