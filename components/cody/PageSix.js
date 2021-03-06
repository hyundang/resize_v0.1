import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { InputBoxBig, Question } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
import useImgInput from "../../hooks/useImgInput";
// recoil
import { useRecoilValue } from "recoil";
import { CodyOtherState, CodyImgState } from "../../states/cody_atom";
import { SexState, VisitState } from "../../states/website_atom";
// assets
import camera_icon from "../../public/images/website/icon/camera.svg";
import del_icon from "../../public/images/website/icon/del_icon.svg";
// axios
import { deleteApi } from "../../lib/api";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    // input 여러 개 만들기
    const inputOne = useRecoilInput(CodyOtherState(7));
    const inputTwo = useRecoilInput(CodyOtherState(8));
    const imginput = useImgInput(CodyImgState);
    const fileInput = useRef();

    const isVisited = useRecoilValue(VisitState);
    const sex = useRecoilValue(SexState);

    const handleDelClick = async (e) => {
        fileInput.current.value = '';
        imginput.setValue(imginput.value.filter((item, idx)=>{
            return e.target.id != item.id;
        }))
        const response = await deleteApi.DeleteImg(e.target.id);
    }

    // useEffect(()=>{
    //     console.log(imginput.value)
    // }, [imginput.value])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
            <Wrap isVisited={isVisited.includes("네")}>
                <Question
                    quesNum={quesNum}
                    quesText={"해당 코디에 꼭 포함하고 싶은 상품"}
                    overlapText={"선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig
                    text={"예) 뽀얀 흰색의 양털 후리스, 워싱이 없는 진청 색상의 청바지는 꼭 포함하고 싶어요!"}
                    input={inputOne}
                />
                <div style={{marginBottom:'3.6rem'}}/>
                <Question
                    quesNum={0}
                    quesText={"참고하고 싶은 코디 사진"}
                    overlapText={"선택"}
                />
                {/* 사진 업로드 기능 들어가기 */}
                <div style={{marginBottom:'2.3rem'}}/>
                <div style={{
                    width:'32rem', height:'14rem',
                    overflow:'scroll'
                }}>
                    <div style={{
                        display:'flex',flexDirection:'row',
                        alignItems:'flex-start',
                        width:`${14+15*imginput.value.length}rem`
                        }}>
                    <div>
                    <ImgInputBox htmlFor="file">
                        <div style={{
                            display:'flex',flexDirection:'column',
                            alignItems:'center', justifyContent:'space-between'
                        }}>
                            <img src={camera_icon}
                                style={{width:'5rem',height:'4.4rem',marginBottom:'1.2rem'}}
                            />
                            {"연출하고 싶은 코디\n사진을 업로드 해주세요."}
                        </div>
                    </ImgInputBox>
                    <input
                        type="file"
                        id="file"
                        accept="image/jpeg, image/jpg, image/png"
                        ref={fileInput}
                        onChange={imginput.onChange}
                        style={{width:'0', height:'0'}}
                    />
                    </div>
                    {
                        imginput.value.map((item, idx)=>{
                            return <Picture
                                        key={idx}
                                        id={item.id}
                                        url={item.photo}
                                    >
                                        <DelIcon 
                                            src={del_icon}
                                            id={item.id}
                                            onClick={handleDelClick}
                                        />
                                    </Picture>
                        })
                    }
                    </div>
                </div>
                <div style={{marginBottom:'3.6rem'}}/>
                <Question
                    quesNum={0}
                    quesText={"이밖의 요청사항"}
                    overlapText={"선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <InputBoxBig
                    text={"제 체형을 보완할 수 있는 옷을 추천해주셨으면 좋겠어요! 과한 디테일은 좋아하지 않아서 작은 포인트만 들어가있는 옷을 추천해주세요."}
                    input={inputTwo}
                />
                <div style={{marginBottom:'3.6rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                lastQuesNum={lastQuesNum} kategorie={2}
                isLeftOkay={true} isRightOkay={true}
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

const ImgInputBox = styled.label`
    display: inline-block;
    width: 14rem;
    height: 14rem;
    padding: 2.6rem 1.45rem;
    border-radius: 0.8rem;
    background-color: #f5f2ec;

    font-size: 1.1rem;
    font-weight: 500;
    color: #a99174; 
    line-height: 1.36;
    text-align: center;
    white-space: pre-line;
`;

const Picture = styled.div`
    width: 14rem;
    height: 14rem;
    border-radius: 0.8rem;
    border: solid 0.1rem #d6d6d6;
    margin-left: 1rem;
    background: url(${props=>props.url}) center center / cover;
`;

const DelIcon = styled.img`
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    top: 0.5rem;
    left: 83%;
`;