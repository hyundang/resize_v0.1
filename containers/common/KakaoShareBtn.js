import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import useScript from "../../hooks/useScript";

const kakaoID = "91a50f2ae6db8ae5cdaf0916886e5793";
const baseurl = "https://resize.co.kr";

//왜안돼..
const KakaoShareBtn = ({imgurl}) => {
    const { loaded } = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    
    useEffect(()=>{
      if(loaded){
        // console.log("k "+imgurl)
        createKakaoBtn();
      }
    }, [loaded])

    const createKakaoBtn = () => {
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
                title: '리사이즈 체형유형테스트',
                description: '나도 몰랐던 체형유형과 찰떡코디 추천까지!\n#리사이즈 #체형 #무료코디 #스타일링',
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
    cursor: pointer;
    width: 4rem;
    height: 4rem;
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
    width: 4.1rem;
    height: 4.1rem;
`;