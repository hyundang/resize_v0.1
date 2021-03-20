import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Loading } from "../../components";
import { InputBox, Question, OverlapBtns } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// router
import { useRouter } from "next/router";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { UserInfoState, UserJobState, TotalUserInfoState, UserIDState } from "../../states/last_atom";
import { TotalStyleDataState } from "../../states/style_atom";
import { SizeID, TotalSizeDataState } from "../../states/size_atom";
import { TotalCodyDataState } from "../../states/cody_atom";
import { SexState } from "../../states/website_atom";
// axios
import { postApi } from "../../lib/api";


export default ({user_datas}) => {
    const [modalVisible, setModalVisible] = useState(false);

    // 유저 정보 데이터
    const name = useRecoilInput(UserInfoState(0));
    const birth = useRecoilInput(UserInfoState(1));
    // const [birth, setBirth] = useState(0);
    const phone = useRecoilInput(UserInfoState(2));
    const emailfront = useRecoilInput(UserInfoState(3));
    const emailback = useRecoilInput(UserInfoState(4));
    const instagram = useRecoilInput(UserInfoState(5));
    // 직업 데이터
    const [selectData, setSelectData] = useRecoilState(UserJobState);
    // 전체 데이터
    const result = useRecoilValue(TotalUserInfoState);


    // 다음 단계 진행 가능 여부
    const [isNextOkay, setIsNextOkay] = useState(false);

    const router = useRouter();

    // post 할 데이터
    const [styleData, setStyleData] = useRecoilState(TotalStyleDataState);
    const [sizeData, setSizeData] = useRecoilState(TotalSizeDataState);
    const [codyData, setCodyData] = useRecoilState(TotalCodyDataState);
    // loading 여부
    const [isLoading, setIsLoading] = useState(false);
    // 성별
    const sex = useRecoilValue(SexState);
    // user id
    const [id, setId] = useRecoilState(UserIDState);
    // size id
    const [sizeid, setSizeId] = useRecoilState(SizeID);


    useEffect(()=>{
        window.scroll(0, 0);
        emailback.setValue("gmail.com")
    }, [])

    // 스타일링 끝내기 눌렀을 때
    // 유저 데이테와 스타일링 데이터 서버에 전송
    const handleClick = async () => {
        setIsLoading(true);
        const res_signup = await postApi.userSignup(result);
        const userToken = res_signup.data.Token;
        const userID = res_signup.data.id;
        setId(userID);
        // res_signup 에서 유저 id값 받은 후 스타일 데이터 보낼 때 넣어서 같이 post
        // post 될 동안 로딩 화면 보여주어야 할 듯!!
    }

    useEffect(()=>{
        if(id!==0){
            postData();
        }
    }, [id])

    const postData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const style = await postApi.PostData(styleData, isMorF, 'style', 'Style');
        const size = await postApi.PostData(sizeData, isMorF, 'size', 'Size');
        setSizeId(size.data.id);
    }

    useEffect(()=>{
        if(sizeid!==0){
            PostCody();
            router.push('/website_dev/result');
        }
    }, [sizeid])

    const PostCody = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const cody = await postApi.PostData(codyData, isMorF, 'cody', 'Cody');
    }
    

    // 다음 단계로 진행 가능 여부 판단
    useEffect(()=>{
        if(result.name!=="" & result.birth!==""
        & result.phone!=="" & result.emailfront!==""
        & result.phone.length===11
        & selectData!==-1){
            setIsNextOkay(true);
            // console.log(1);
        }
        else{
            setIsNextOkay(false);
        }
    },[result, selectData]);

    // useEffect(()=>{
    //     // console.log(result);
    // }, [result])


    return(
        <>
        {!isLoading?
        <Wrap>
            <Header  kategorie={3} quesNum={1} lastQuesNum={1}/>
            <Question
                quesNum={0}
                quesText={"이름"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 홍길동"}
                input={name}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"생년월일"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBirth 
                type="date" min="1960-01-01" max="2021-01-01"  
                placeholder={"연도-월-일"}
                value={birth.value} 
                onChange={birth.onChange}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"휴대폰 번호"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputPhone
                placeholder={"예) 01012345678"}
                value={phone.value}
                onChange={phone.onChange}
                type="number" pattern="\d*"
                min="0" max="99999999999"
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"이메일"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <div style={{
                display:'flex',flexDirection:'row',
                alignItems:'center',justifyContent:'space-between',
                width:'32rem', height:'4.4rem'
            }}>
                <InputEmailfront
                    type="text"
                    placeholder={"이메일"}
                    value={emailfront.value}
                    onChange={emailfront.onChange}
                />
                <div style={{width:'1.4rem',height:'1.4rem',fontSize:'1.4rem',lineHeight:'1.4rem'}}>@</div>
                <InputEmailBack name="email" 
                    value={emailback.value} onChange={emailback.onChange}
                >
                    <optgroup>
                        <option value="gmail.com">gmail.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="hanmail.net">hanmail.net</option>
                        <option value="nate.com">nate.com</option>
                        <option value="daum.net">daum.net</option>
                    </optgroup>
                </InputEmailBack>
            </div>
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"인스타그램 계정"}
            />
            <div style={{width:'32rem',marginTop:'0.5rem',whiteSpace:'pre-wrap',fontSize:'1.2rem',color:'#707070',textAlign:'left',lineHeight:'1.67'}}>
                {"고객님의 평소 스타일을 참고하기 위해서\n수집하는 항목이며, 이 외의 용도로는 사용되지 않습니다."}
            </div>
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) instagram"}
                input={instagram}
            />
            <div style={{marginTop:'3.6rem'}}/>
            <Question
                quesNum={0}
                quesText={"직업"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <OverlapBtns
                btnType={2}
                data={user_datas}
                isOverlap={false} maxNum={1}
                isNoneExist={false}
                selectData={selectData} setSelectData={setSelectData}
            />          
            <div style={{marginTop:'3.6rem'}}/>
            <Bottom onClick={isNextOkay? handleClick : ()=>{}}>스타일링 끝내기</Bottom>
        </Wrap>
        :<Loading/>
        }
        </>
    )
}


const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 8.6rem;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.off_white};
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    letter-spacing: -0.4px;

`;

const InputBirth = styled.input`
    width: 32rem;
    height: 4.4rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    text-align: left;
    color: #767676;
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const InputPhone = styled.input`
    width: 32rem;
    height: 4.4rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    text-align: left;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
        font-size: 1.4rem;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const InputEmailfront = styled.input`
    width: 14rem;
    height: 4.4rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    text-align: left;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
        font-size: 1.4rem;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const InputEmailBack = styled.select`
    width: 14rem;
    height: 4.4rem;
    padding: 1rem 1.2rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    text-align: left;
    color: #bdbdbd;
    ::placeholder{
        color: #bdbdbd;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;