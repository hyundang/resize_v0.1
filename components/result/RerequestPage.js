import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, TagBtns, Modal } from "./common";
import { InputBoxBig } from "../common";
// hooks
import useInput from "../../hooks/useRecoilInput";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { RequestReasonState, RequestDetailState, CurationDataState } from "../../states/result_atom"
// router
import { useRouter } from "next/router";
// api
import { postApi } from "../../lib/api";


const data=["색상이 마음에 안 들어서", '디자인이 마음에 안 들어서', '가격이 마음에 안 들어서', '품질이 마음에 안 들어서', '기타'];

export default ({id, sex}) => {
    const inputOne = useInput(RequestDetailState(0));
    const inputTwo = useInput(RequestDetailState(1))
    const [selectData, setSelectData] = useRecoilState(RequestReasonState);
    
    const resData = useRecoilValue(CurationDataState);

    const router = useRouter();
    
    const [isActive, setIsActive] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);

    useEffect(()=>{
        window.scroll(0,0);
    },[])
    
    useEffect(()=>{
        if(selectData!==-1 & inputTwo.value!=="" & inputOne.value!==""){
            setIsActive(true);
        }
        else{
            setIsActive(false);
        }
    }, [selectData, inputOne.value, inputTwo.value])


    const PostData = async () => {
        let data = resData.reservation;
        const size_id =  data.size.id;

        let post_data = {};
        for( const [key, value] of Object.entries(data)){
            if(key!=="create_time" & key!=="last_update_time"){
                if(key==="size"){
                    post_data[key] = size_id;
                }
                else if(key==="is_rereservation"){
                    post_data[key] = "True";
                }
                else if(key==="reason"){
                    post_data[key] = selectData;
                }
                else if(key==="reason_detail1"){
                    post_data[key] = inputOne.value;
                }
                else if(key==="reason_detail2"){
                    post_data[key] = inputTwo.value;
                }
                else{
                    post_data[key] = value;
                }
            }
        }

        await postApi.PostData(post_data, sex, 'cody', 'Cody');
    }

    const handleClick = () => {
        PostData();
        router.push('/website_dev/result')
    }

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header text={"코디 큐레이션 재요청하기"}/>
            <Wrap>
                <div style={{height:'2rem'}}/>
                <Title>코디 큐레이션을 재요청하는 이유가 무엇인가요?</Title>
                <div style={{height:'2rem'}}/>
                <TagBtns 
                    data={data}
                    selectData={selectData}
                    setSelectData={setSelectData} 
                />
                <div style={{height:'3.6rem'}}/>
                <Title>구체적으로 불만족한 부분을 설명해주세요.</Title>
                <div style={{height:'2rem'}}/>
                <InputBoxBig
                    text={"사진에서 봤던 것과 디자인이 달랐어요. 사이즈도 살짝 컸어요. 조금 더 딱 맞는 핏의 옷을 찾고 싶습니다. 색감도 생각보다 쨍했어요."}
                    input={inputOne}
                />
                <div style={{height:'3.6rem'}}/>
                <Title>추가적으로 요청하고 싶은 부분을 설명해주세요.</Title>
                <div style={{height:'2rem'}}/>
                <InputBoxBig 
                    text={"워싱이 안 들어가고 커팅 디테일이 없는 진청 색상의 스키니진으로 부탁드릴게요."}
                    input={inputTwo}
                />
                <div style={{height:'7rem'}}/>
            </Wrap>
            <Bottom 
                text={"코디 큐레이션 재요청하기"}
                onClick={isActive? handleClick : ()=>setIsModalShown(true)}
                isActive={isActive}
            />
            {isModalShown && <Modal
                                setIsShown={setIsModalShown}
                                innerPageNum={0}
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
    width: 32rem;
    height: 2rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.7rem;
    letter-spacing: -0.4px;
    color: ${({theme})=>theme.colors.black};
`;