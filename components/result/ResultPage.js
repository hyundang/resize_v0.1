import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, ClothesBox, Modal } from "./common";
import { RatioStep } from "../common";
import { Loading } from "../index";
// hooks
import useInput from "../../hooks/useRecoilInput";
// recoil
import { useSetRecoilState, useRecoilState } from "recoil";
import { CurationDataState, DetailPageLikeState, DetailPageNumState, DetailPageOpinionState,  } from "../../states/result_atom"
// router
import { useRouter } from "next/router";
// api
import { getApi, postApi } from "../../lib/api";
// lib
import curation_clothes from "../../lib/curation_clothes";


const data = ["0%", "25%", "50%", "75%", "100%"];

export default ({sex, id}) => {
    const [resData, setResData] = useRecoilState(CurationDataState);
    const [curationOne, setCurationOne] = useState([]);
    const [curationTwo, setCurationTwo] = useState([]);

    const inputOne = useInput(DetailPageOpinionState(0));
    const inputTwo = useInput(DetailPageOpinionState(1));
    const [selectDataOne, setSelectDataOne] = useRecoilState(DetailPageLikeState(0));
    const [selectDataTwo, setSelectDataTwo] = useRecoilState(DetailPageLikeState(1));

    const [innerPageNum, setInnerPageNum] = useState(1);
    const setPageNum = useSetRecoilState(DetailPageNumState);

    const [isActive, setIsActive] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(()=>{       
        window.scroll(0,0);
        if(!isLoading)
            document.getElementById("ExplainBox").scroll(0,0);
    },[innerPageNum])


    const GetData = async () => {
            const data = await getApi.getResult(sex, id);
            setResData(data);
    }

    useEffect(()=>{
        if(id!==0){
            GetData();
        }
    }, [id])

    useEffect(()=>{
        if(Object.keys(resData).length!==0){
            const clothes1 = curation_clothes(resData.cody[0]);
            const clothes2 = curation_clothes(resData.cody[1]);
            setCurationOne(clothes1);
            setCurationTwo(clothes2);
            setIsLoading(false);
        }
    }, [resData])

    // useEffect(()=>{
    //     console.log(curationOne);
    // }, [curationOne])

    useEffect(()=>{
        if(innerPageNum===1){
            if(inputOne.value!=="" & selectDataOne!==-1){
                setIsActive(true);
            }
            else{
                setIsActive(false);
            }
        }
        else{
            if(inputTwo.value!=="" & selectDataTwo!==-1){
                setIsActive(true);
            }
            else{
                setIsActive(false);
            }
        }
    }, [innerPageNum, selectDataTwo, selectDataOne, inputTwo.value, inputOne.value])


    const handleBtnClick = () => {
        if(innerPageNum===1){
            setInnerPageNum(2);
        }
        else{
            setInnerPageNum(1);
        }
    }

    const PostData = async () => {
        let data = {
            cody_num: 1,
            review: selectDataOne,
            review_detail: inputOne.value,
            curation: id
        }
        await postApi.postReview(data, sex);
        data = {
            cody_num: 2,
            review: selectDataTwo,
            review_detail: inputTwo.value,
            curation: id
        }
        await postApi.postReview(data, sex);
    }

    const handleSubmitClick = () => {
        // 유저가 써놓은 것 post 보내기
        PostData();
        router.push('/website_dev');
    }

    const handleRequestClick = () => {
        PostData();
        setPageNum(1)
    }

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header text={"코디 큐레이션 결과"}/>
            <Wrap>
                {!isLoading?
                <>
                <div style={{width:'32rem'}}>
                <Title>나의 정보</Title>
                </div>
                <div style={{height:'2.6rem'}}/>
                <InfoBox style={{height:'18rem'}}>
                    <Info 
                        textone={"키"} texttwo={`${resData.reservation.size.height}cm`} 
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"몸무게"} texttwo={`${resData.reservation.size.weight}kg`}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"체형 장점"} texttwo={resData.reservation.size.fit_like}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"체형 단점"} texttwo={resData.reservation.size.fit_hate}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"요청 코디"} texttwo={resData.reservation.TPO}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                    <Info 
                        textone={"요청 가격"} texttwo={resData.reservation.cody_price}
                        widthone={"10.5rem"} widthtwo={"21.5rem"}
                    />
                </InfoBox>
                <div style={{height:'3rem'}}/>
                <div style={{width:'100vw',height:'1.1rem',background:'#2b2b2b',opacity:'0.11'}}/>
                <div style={{height:'3.2rem'}}/>
                <Title>LOOK {innerPageNum}</Title>
                <div style={{height:'3.5rem'}}/>
                <img style={{width:'22.6rem',height:'22.6rem'}} src={innerPageNum===1? resData.cody[0].photo: resData.cody[1].photo}/>
                <div style={{height:'4.5rem'}}/>
                <InfoBox>
                    <Info 
                        textone={"코디 조합"} texttwo={innerPageNum===1? resData.cody[0].cody_combination.name : resData.cody[1].cody_combination.name}
                        widthone={"11rem"} widthtwo={"6rem"}
                    />
                    <Info 
                        textone={"총 가격"} texttwo={innerPageNum===1? resData.cody[0].price : resData.cody[1].price}
                        widthone={"11rem"} widthtwo={"6rem"}
                    />
                </InfoBox>
                <div style={{height:'3.6rem'}}/>
                <ExplainBox 
                    id="ExplainBox"
                    value={innerPageNum===1? resData.comment1 : resData.comment2}
                    readOnly={true}  
                />
                <div style={{height:'3.6rem'}}/>
                <TitleLineNone>코디 큐레이션 상품 정보</TitleLineNone>
                <div style={{height:'2rem'}}/>
                {innerPageNum===1?
                curationOne.map((item, idx)=>{
                    return <ClothesBox data={item} key={idx}/>
                })
                : curationTwo.map((item, idx)=>{
                    return <ClothesBox data={item} key={idx}/>
                })
                }
                <div style={{height:'3.6rem'}}/>
                <TitleLineNone>코디 {innerPageNum}은 원하는 스타일과 어느정도 일치하나요?</TitleLineNone>
                <div style={{height:'2rem'}}/>
                <RatioStep
                    data={data}
                    selectData={(innerPageNum===1)? selectDataOne : selectDataTwo}
                    setSelectData={(innerPageNum===1)? setSelectDataOne: setSelectDataTwo}
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
                    value={(innerPageNum===1)? inputOne.value : inputTwo.value}
                    onChange={(innerPageNum===1)? inputOne.onChange : inputTwo.onChange}    
                />
                {(innerPageNum===2)&&
                <>
                    <div style={{height:'2rem'}}/>
                    <TitleLineNone style={{marginBottom:'0.5rem',fontSize:'1.35rem',lineHeight:'2.2rem',whiteSpace:'pre-line'}}>
                        {"코디 큐레이션에 불만족하셨나요?\n코디가 마음에 안 드셨다면 1회에 한해 재요청이 가능해요!"}
                    </TitleLineNone>
                    <div style={{height:'3rem'}}/>
                    <RequestBtn 
                        onClick={isActive? handleRequestClick : ()=>setIsModalShown(true)}
                        isActive={isActive}
                    >코디 큐레이션 재요청하기</RequestBtn>
                </>}
                <div style={{height:'5rem'}}/>
                </>
                : <Loading/>
                }
            </Wrap>
            {(innerPageNum===1)?
            <Bottom 
                text={"다음 코디 보러가기"}
                onClick={isActive? handleBtnClick : ()=>setIsModalShown(true)}
                isActive={isActive}
            />
            :<div style={{width:'100%',height:'8.6rem',display:'flex',alignItems:'center',justifyContent:'center',position:'fixed',bottom:'0'}}>
                <div style={{width:'32rem',height:'5.2rem',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Btn
                        style={{width:'15rem',backgroundColor:'#f6f2eb'}}
                        onClick={handleBtnClick}
                    >
                        이전 코디 보기
                    </Btn>
                    <Btn
                        style={{width:'15rem',backgroundColor:(isActive?'#c7b299':'#e5e5e5'),color:'white'}}
                        onClick={isActive? handleSubmitClick : ()=>setIsModalShown(true)}
                    >
                        작성 완료
                    </Btn>
                </div>
            </div>
            }
            {isModalShown&&<Modal
                                setIsShown={setIsModalShown}
                                innerPageNum={innerPageNum}
                            />
            }
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
    width: 6.5rem;
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
    background-color: ${props=>props.isActive? '#DDC9B2' : '#e6e6e6'};
    font-size: 1.4rem;
    text-align: center;
    line-height: 5.1rem;
    color: white;
    transition: 0.5s;
`;

const Btn = styled.div`
    height: 5.2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0, 0.2);
    display:flex;
    align-items:center;
    justify-content:center;
    transition: 0.5s;

    color: ${({theme})=>theme.colors.black};
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: -0.4px;
`;