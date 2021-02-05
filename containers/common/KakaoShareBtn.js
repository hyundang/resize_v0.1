import React, { useEffect, useState } from 'react';
import style from 'styled-components';
// recoil
import { useSetRecoilState } from "recoil";
import { ToastMsgState, IsClipState } from "../../states/atom";

const kakaoID = "91a50f2ae6db8ae5cdaf0916886e5793";
const baseurl = "http://localhost:3000";


const KakaoShareBtn = ({imgurl}) => {
    const setIsClip = useSetRecoilState(IsClipState);
    const setIsToastMsgShow = useSetRecoilState(ToastMsgState);
    
    useEffect(()=>{
        createKakaoBtn();
    }, [])

    const createKakaoBtn = () => {
        console.log(imgurl);
        if (window.Kakao) {
            const kakao = window.Kakao
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
              // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
              kakao.init(kakaoID)
            }
            kakao.Link.createDefaultButton({
              // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
              container: '#kakao-link-btn',
              objectType: 'feed',
              content: {
                title: '리사이즈 체형테스트',
                description: '#리사이즈 #체형테스트 #무료코디 #무료스타일링',
                imageUrl: baseurl+imgurl, // i.e. process.env.FETCH_URL + '/logo.png'
                link: {
                  mobileWebUrl: window.location.href,
                  webUrl: window.location.href,
                },
              },
              buttons: [
                {
                  title: '웹으로 보기',
                  link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                  },
                },
              ],
            })
          }
    }

    const handleKtalckClick = () => {
        setIsToastMsgShow(true);
        setIsClip(false);
    }



    return(
        <div className="kakao-share-button">
            {/* Kakao share button */}
            <BtnWrap id="kakao-link-btn">
                <KakaoImg src="/images/sizetest/kakaolink_btn_medium.png" alt="kakao-share-icon" />
            </BtnWrap>
        </div>
    )
}

export default KakaoShareBtn;

const BtnWrap = style.button`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    background: none;
    outline: none;
    overflow: hidden;
    box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.4);
`;

const KakaoImg = style.img`
    width: 3.1rem;
    height: 3.1rem;
`;