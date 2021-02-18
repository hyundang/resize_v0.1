import style from 'styled-components';
import React, {useState, useCallback} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// recoil
import { useRecoilState } from "recoil";
import { ToastMsgState, IsClipState } from "../../states/atom";

// component
import axios from "axios";
import Layout from '../../containers/common/Layout';

// for clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToastMsg from '../../containers/common/ToastMsg';
import Modal from '../../components/common/modal';

// asset
const clip = "/images/sizetest/clip.svg";
// const baseurl = "https://www.resize.com";
const baseurl = "https://resize.co.kr";

//data
import {sizeTest_final} from '../../data/sizeTest_final_data.js';

export function searchID(id) {
    var sizeID = 0;
    switch(id){
        case 'NTSU':
            sizeID = 0;
            break;
        case 'NTSM':
            sizeID = 1;
            break;
        case 'NTBU':
            sizeID = 2;
            break;
        case 'NTBM':
            sizeID = 3;
            break;
        case 'NCSU':
            sizeID = 4;
        case 'NCSM':
            sizeID = 5;
            break;
        case 'NCBU':
            sizeID = 6;
            break;
        case 'NCBM':
            sizeID = 7;
            break;
        case 'WTSU':
            sizeID = 8;
            break;
        case 'WTSM':
            sizeID = 9;
            break;
        case 'WTBU':
            sizeID = 10;
            break;
        case 'WTBM':
            sizeID = 11;
            break;
        case 'WCSU':
            sizeID = 12;
            break;
        case 'WCSM':
            sizeID = 13;
            break;
        case 'WCBU':
            sizeID = 14;
            break;
        case 'WCBM':
            sizeID = 15;
            break;
        default:
            break;
    }
    return sizeID;
}

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
      setter(e.target.value);
  }, []);
  return [value, handler];
};

const Final = ({}) => {
  const [phone, onChangePhone] = useInput('');
  const [phoneError, setPhoneError] = useState(false);
  const [checked, onChangeChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
 
  const router = useRouter();
  const {id} = router.query;
  console.log(id);
  const url = '/images/sizetest/character/'+id+'.png';
  const sizeID = parseInt(searchID(id));
  const data = sizeTest_final;
  const result = {
    gender : 0,
    height: 1,
    weight: 1,
    answers: phone,
    mySize : id,
    email: "t@g.com",
  }

  const checkHandler = ({ target }) => {
    onChangeChecked(!checked);
  };

  const onFinish = () => {
    console.log(phone);
    console.log(checked);
    setPhoneError(false);
    setCheckedError(false);
    if (!phone) {
      setPhoneError(true);
    }
    else if (!checked) {
      setCheckedError(true);
    }
    else{
      axios.post(`https://test.re-size.co.kr/sizetest/sizetestemail/`, result)
        .catch((error) => {
          if(error.response) {
            console.log(error.response);
          }
          console.log("Problem submitting New Post", error);
        });
      alert('제출되었습니다');
    }
  };

  const [isClip, setIsClip] = useRecoilState(IsClipState);
  const [isToastMsgShow, setIsToastMsgShow] = useRecoilState(ToastMsgState);

  const onCopy = () => {
    ({ copied: true });
  };

  const handleClipClick = () => {
    setIsToastMsgShow(true);
    setIsClip(true);
  };

  const handleKtalckClick = () => {
    setIsToastMsgShow(true);
    setIsClip(false);
  };

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <PCContainer>
      <Container>
        <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
        <TitleContainer>
          <Title>{data[sizeID].title}</Title>
          <Title2>{data[sizeID].subtitle}</Title2>
          <Image src= {url} width="250" height="250"/>
        </TitleContainer>
        <Hash>{data[sizeID].hashtag}</Hash>
        <Des>{data[sizeID].description}</Des>
        <Personal>
          <IntroTitle>1:1 퍼스널 패션 큐레이션 서비스 이용권 받기</IntroTitle>
          <Des2>리사이즈에서 3월 런칭 예정인<Bold>"고객님만을 위한 1:1 퍼스널 패션 큐레이션 서비스"</Bold>를 무료로 이용하고 싶으시다면, 고객님의 전화번호를 적어주세요! 적어주신 번호로 리사이즈 1:1 퍼스널 큐레이션 서비스 이용권을 드립니다.</Des2>
          <PhoneContainer>
              <input type="text" style ={{border: '1px solid #dec19f', borderColor: '#dec19f', width: '80%', padding: '10px 10px'}} value={phone} required onChange={onChangePhone} placeholder="전화번호를 입력해주세요.">
              </input>
            <Submit type="submit" onClick = {onFinish} value="Submit"><Text>제출</Text></Submit>
          </PhoneContainer>
          {phoneError && <Status> 전화번호를 입력해주세요 </Status> }
          {checkedError && <Status> 개인정보 수집에 동의해주세요 </Status> }
          <AgreeContainer>
            <input type="checkbox" checked={checked} onChange={(e) => checkHandler(e)} /> 
            <BottomText>개인정보 수집 동의</BottomText>
            <AgreeLink onClick={openModal}> [자세히 보기]</AgreeLink>
              {
                modalVisible && <Modal
                  visible={modalVisible}
                  closable={true}
                  maskClosable={true}
                  onClose={closeModal}
                  title= {'개인정보 수집 동의'}
                  >
                    <Title3>1. 개인정보 수집 및 이용 안내 동의</Title3>
                    <Des3>리사이즈는 사전예약 서비스 제공을 위해 다음과 같은 개인정보를 수집하고 있습니다.  </Des3>
                    <Des3>개인정보 수집을 거부하는 경우 이벤트 참여에 제한이 될 수 있습니다.</Des3>
                    <Des3>＊수집하고자 하는 항목: 전화번호 / 이벤트 참여내역</Des3>
                    <Des3>＊개인정보 수집 목적: 무료 이용권 수령 이벤트 참여, 큐레이션 서비스 출시 알림 SMS 발송</Des3>
                    <Des3>* 보유 및 이용 기간: 이벤트 참여자 DB이용, 큐레이션 서비스 출시 후 3개월간 보관 후 삭제</Des3>
                    <Des3>단 관계법령에 따라 보존이 필요한 경우 해당 기간동안 보관</Des3>
                    <Title3>2. 개인정보 제공 및 이용 안내 동의</Title3>
                    <Des3>리사이즈는 사전예약 서비스 제공을 위해 개인 정보를 다음과 같이 제공합니다.</Des3>
                    <Des3>＊제공 업체: 리사이즈 이외 없음</Des3>
                    <Des3>＊개인정보 제공 목적: 큐레이션 서비스 출시 알림 안내 SMS 발송, 큐레이션 무료 이용권 전송 </Des3>
                  </Modal>
              }
          </AgreeContainer>
        </Personal>
        <BottomWrap>
          <CopyToClipboard text={baseurl+`/sizetest/${id}`} onCopy={onCopy}>
            <ShareBtnWrap onClick={handleClipClick}>
              <IconImg src={clip}/>
            </ShareBtnWrap>
          </CopyToClipboard>
          <Layout imgurl={url}/>
        </BottomWrap>
        {isToastMsgShow && <ToastMsg text={isClip ? "복사되었습니다." : "공유되었습니다."}/>}
      </Container>
    </PCContainer>
  );
}

export default Final;

const PCContainer = style.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:start;
  background-color: white;
`

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width:500px;
  height:100%;
  background-color: white;
  font-family: 'Nanum Gothic', sans-serif;
  border:1px solid black;
  border-color: #a99174;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 100%;
  }
  padding: 0 0 60px 0;
`;

const LogoContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  background-color: #a99174;
  padding : 1vw;
`;

const TitleContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 26px 0 0 0;
  @media (max-width: 500px) {
    padding: 5vw 0 2vw 0;
  }
`;

const Title = style.div`
  font-size:12px;
  padding: 20px 0 0 0;
  @media (max-width: 500px) {
    font-size:12px;
  }
  font-weight: bold;
  width:90%;
  text-align:center;
`;

const Title2 = style.div`
  font-size:24px;
  padding: 10px 0 40px 0;
  @media (max-width: 500px) {
    font-size:24px;
  }
  font-weight: bold;
  width:100%;
  text-align:center;
`;

const CharacterContainer = style.div`
  maring: 10px;
`;

const Hash = style.div`
  text-align: center;
  font-size: 16px;
  font-style: italic;
  width: 80%;
  color: gray;
  line-height: 16px;
  padding: 40px 0 6px 0;
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
    padding: 1vw 0 2vw 0;
  }
`;

const Des = style.div`
  text-align: justify;
  font-size:13px;
  width:80%;
  line-height: 24px;
  padding: 10px 0 30px 0;
  margin: 10px;
  @media (max-width: 500px) {
    font-size:12px;
    line-height: 24px;
    padding: 10px 10px 30px 0;
  }
`;

const Personal = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  text-align:center;
  color: black;
  background-color: #f6f2eb;
  border:1px solid black;
  border-color: #f6f2eb;
  border-radius: 5px;
  padding: 10px 0 20px 0;
`;

const Des2 = style.div`
  font-size:12px;
  width:95%;
  line-height: 24px;
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 24px;
  }
  text-align:center;
  color: black;
  background-color: #f6f2eb;
  border:1px solid black;
  border-color: #f6f2eb;
  border-radius: 5px;
`;

const Bold = style.div`
  font-weight: bold;
`;

const Text = style.div`
  color : #fff;
  font-size: 14px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
  font-weight: bold;
`;

const IntroTitle = style.div`
  font-size: 14px;
  font-weight: bold;
  padding: 30px 0 30px 0 ;
`;

const PhoneContainer = style.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  width: 90%;
  padding: 14px 0 0 0;
  @media (max-width: 500px) {
    padding: 14px 0 0 0;
    font-size: 0.9rem;
  }
`;


const Submit = style.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border:1px solid black;
  border-color: #dec19f;
  border-radius: 5px;
  box-shadow: 0vw 2vw 7vw 0 rgba(98, 69, 34, 0.15);
  padding:  10px 0 ;
  margin: 18px 10px;
  @media (max-width: 500px) {
    padding: 10px 0;
    margin: 2vw 1vw;
  }
  background-color: #dec19f;
  cursor : pointer;
  &:hover{
    background-color: #a99174;
    border-color: #a99174;
  }
`;

const AgreeContainer = style.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 80%;
  padding: 0 10px 10px 0;
  @media (max-width: 500px) {
    padding: 0 0 1vw 0;
    font-size: 0.9rem;
  }
`;

const BottomText = style.div`
  font-size: 12px;
  padding-left: 5px;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const AgreeLink = style.div`
  font-size: 12px;
  padding-left: 10px;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
  color: #d65100;
  cursor : pointer;
`;

const Status = style.div`
  margin : 0 0 6px 0 ;
  color : red;
  font-size: 10px;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`

const Title3 = style.div`
  font-size:14px;
  padding: 30px 0 16px 0;
  font-weight: bold;
  width:90%;
  text-align:start;
`;

const Des3 = style.div`
  text-align: justify;
  font-size:12px;
  width:80%;
  line-height: 24px;
`;

const BottomWrap = style.div`
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  padding: 30px 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ShareBtnWrap = style.div`
  margin: 20px 100px 20px 20px;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #a0a0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.4);
`;

const IconImg = style.img`
  margin: 20px;
  width: 2rem;
  height: 2rem;
`;

const KaKaoButton = style.div`
  margin: 20px;
`;