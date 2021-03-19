import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, Loading } from "../../components";
import { Question, Circles, RatioStep, Rectangles } from "../../components/common";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { BodyDetailState, SizeQuesThreeState } from "../../states/size_atom";
import { SexState } from "../../states/website_atom";
// axios
import { getApi } from "../../lib/api";
// lib
import SortData from "../../lib/SortData";


export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    const [ratio, setRatio] = useRecoilState(BodyDetailState(0));
    const [facetype, setFacetype] = useRecoilState(BodyDetailState(1));
    const [skintype, setSkintype] = useRecoilState(BodyDetailState(2));
    const [shoultype, setShoultype] = useRecoilState(BodyDetailState(3));
    
    const sex = useRecoilValue(SexState);

    // 서버에서 받아온 데이터 저장됨.
    const [faceType, setFaceType] = useState([]);
    const [skinTone, setSkinTone] = useState([]);
    const [shoulderType, setShoulderType] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        // 스크롤 초기화하기
        window.scrollTo(0,0);
        // 서버에서 데이터 받아오기
        getData();
    }, [])

    const getData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }

        const faceType_result = await getApi.getImgData('size', isMorF, 'Face_Type');
        setFaceType(faceType_result.results);
        let sorted_data = await SortData(faceType_result.results);
        setFaceType(sorted_data);

        const skinTone_result = await getApi.getImgData('size', isMorF, 'Skin_Tone');
        setSkinTone(skinTone_result.results);
        sorted_data = await SortData(skinTone_result.results);
        setSkinTone(sorted_data);

        const shoulderType_result = await getApi.getImgData('size', isMorF, 'Shoulder_Type');
        setShoulderType(shoulderType_result.results);
        sorted_data = await SortData(shoulderType_result.results);
        setShoulderType(sorted_data);

        // 로딩 종료
        setIsLoading(false);
    }

    // 다음 버튼 활성화 여부
    const [isRightOkay, setIsRightOkay] = useState(false);
    
    // 페이지 데이터
    const res = useRecoilValue(SizeQuesThreeState);

    useEffect(()=>{
        if(res.includes(-1)){
            setIsRightOkay(false);
        }
        else{
            setIsRightOkay(true);
        }
        // console.log(res)
    }, [res])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
            {!isLoading? 
                <>
                <Question
                    quesNum={quesNum}
                    quesText={"체형을 함께 분석해볼까요?"}
                />
                <SmallText>
                    {"객관적인 기준을 적용하지 않아도 됩니다.\n본인이 생각하는 자신의 체형에 대해 알려주세요!"}
                </SmallText>
                <div style={{marginBottom:'6rem'}}>
                    <Text>{user_datas[0].question}</Text>
                    <RatioStep
                        data={user_datas[0].datas}
                        selectData={ratio} setSelectData={setRatio}
                    />
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[1].question}</Text>
                    <Circles
                        data={faceType}
                        isThree={true}
                        isOverlap={false}
                        selectData={facetype} setSelectData={setFacetype}
                    />
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[2].question}</Text>
                    <Circles
                        data={skinTone}
                        isTwo={true} 
                        isOverlap={false}
                        selectData={skintype} setSelectData={setSkintype}
                    />
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[3].question}</Text>
                    <Circles
                        data={shoulderType}
                        isThree={true}
                        isOverlap={false}
                        selectData={shoultype} setSelectData={setShoultype}
                    />
                </div>
                </>
                : <Loading/>
            }
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isLeftOkay={true} isRightOkay={isRightOkay}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const SmallText = styled.div`
    margin-top: 1rem;
    margin-bottom: 4.7rem;
    font-size: 1.15rem;
    font-weight: normal;
    text-align: left;
    color: #707070;
    white-space: pre-line;
`;

const Text = styled.div`
    margin-bottom: 2.5rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;