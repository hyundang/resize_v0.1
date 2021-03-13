import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Loading } from "../../components";
import { InputBox, Question, CheckBox, OverlapBtns } from "../../components/common";
import Modal from "../../components/common/modal";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// router
import { useRouter } from "next/router";
// assets
import arrow from "../../assets/img/icons/brown_arrow_right.svg";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { UserInfoState, UserJobState, CheckedListState, TotalUserInfoState, UserIDState } from "../../states/last_atom";
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

    
    // 약관동의 전체동의 여부
    const [checked, setChecked] = useState(false);
    // 약관동의 된 리스트
    const [checkedList, setCheckedList] = useRecoilState(CheckedListState);

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

    const handleCheckboxClick = (e) => {
        if(e.target.checked){
            setChecked(e.target.checked);
            setCheckedList(['1', '2', '3']);
        }
        else{
            setChecked(e.target.checked);
            setCheckedList([]);
        }
    }

    const handleCheckClick = (e) => {
        if(checkedList.includes(e.target.id)){
            setCheckedList(checkedList.filter((item, idx)=>{
                return e.target.id != item;
            }))
        }
        else{
            setCheckedList(checkedList.concat(e.target.id))
        }
    }

    useEffect(()=>{
        window.scroll(0, 0);
        emailback.setValue("gmail.com")
    }, [])
    
    useEffect(()=>{
        if(checkedList.length === 3){
            setChecked(true);
        }
        else{
            setChecked(false);
        }
    },[checkedList])

    // 다음 단계로 진행 가능 여부 판단
    useEffect(()=>{
        // console.log(checkedList);
        if(result.name!=="" & result.birth!==""
        & result.phone!=="" & result.emailfront!==""
        & result.phone.length===11
        & selectData!==-1
        & checkedList.includes('1') & checkedList.includes('2')){
            setIsNextOkay(true);
            // console.log(1);
        }
        else{
            setIsNextOkay(false);
        }
    },[result, checkedList, selectData]);

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
            <Question
                quesNum={0}
                quesText={"약관동의"}
            />
            <label style={{width:'32rem',marginTop:'2.1rem',marginBottom:'2.1rem'}}>
                <CheckBox 
                    checked={checked} 
                    onChange={handleCheckboxClick}
                />
                <span style={{fontSize:'1.4rem',color:'#333333',textAlign:'left',marginLeft:'0.8rem'}}>전체동의</span>
            </label>
            <PolicyBox
                id={1}
                text={"리사이즈 이용약관"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalVisible(true)}
            />
            <PolicyBox
                id={2}
                text={"리사이즈 개인 정보 처리방침"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalVisible(true)}
            />
            <PolicyBox
                id={3}
                text={"[선택] 마케팅 활용동의"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalVisible(true)}
            />
            <div style={{marginTop:'3.6rem'}}/>
            <Bottom onClick={isNextOkay? handleClick : ()=>{}}>스타일링 끝내기</Bottom>
        </Wrap>
        :<Loading/>
        }
        {modalVisible&&
        <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={()=>setModalVisible(false)}
            title= {'개인정보 처리방침'}
        >
            <div style={{height:'1.5rem'}}/>
            <div style={{width:'26rem'}}>제 1조 [총칙]</div>
            <div style={{height:'1.5rem'}}/>
            <div>“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 
                위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」,
                「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등과 관련된 법규를 
                준수하기 위해 [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 
                어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                리사이즈의 개인정보 처리방침은 관련 법률 및 지침의 변경이나 회사 내부 운영방침의 
                변경 등으로 인하여 개정될 수 있습니다. 개인정보 처리방침 이 변경될 경우 변경사항은 
                홈페이지에 게시됩니다. 
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{width:'26rem'}}>제 2 조 [개인정보 수집항목 및 이용목적]</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                리사이즈가 개인정보 보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리목적은 
                다음과 같습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                - (필수) 성명, 아이디, 비밀번호, 휴대폰번호, 생년월일 : 회원제 서비스 이용에 따른 본인 확인 절차에 이용
            </div>
            <div>
            - (필수) 기타 선택항목(신체사이즈, 선호 스타일 등) : 개인맞춤 서비스를 제공하기 위한 자료
            </div>
            <div>
                - (필수) IP 주소, 방문일시, 쿠키, 기기정보 등 서비스 이용기록 : 서비스 개선, 불량회원 관리
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                수집된 정보는 서비스의 발전, 알고리즘 개발, 회원관리, 마케팅 및 광고 등에 활용됩니다.
            </div>
        </Modal>
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

const PolicyBox = ({id, checkedList, handleCheckClick, text, handleBtnClick}) => {
    return(
        <BoxWrap>
            <div style={{width:'2rem',height:'2rem',marginLeft:'1.3rem'}} id={id} onClick={handleCheckClick}>
                <Icon viewBox="0 0 24 24" checked={checkedList.includes(`${id}`)?true:false} id={id}>
                    <polyline points="19 7 10 17 5 12" id={id} onClick={handleCheckClick}/>
                </Icon>
            </div>
            <Text>{text}</Text>
            <img src={arrow} style={{width:'4rem',height:'4rem'}} onClick={handleBtnClick}/>
        </BoxWrap>
    )
}

const BoxWrap = styled.div`
    width: 32.7rem;
    height: 4.8rem;
    margin-bottom: 0.8rem;
    border-radius: 0.3rem;
    border: solid 0.1rem #f5f3f0;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled.svg`
fill: none;
stroke: ${props=>props.checked? '#a99174': '#e5e5e5'};
stroke-width: 2px;
`;

const Text = styled.span`
    width: 26.4rem;
    height: 1.8rem;
    margin-left: 0.7rem;
    font-size: 1.2rem;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;
