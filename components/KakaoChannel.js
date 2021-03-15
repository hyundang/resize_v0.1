import React, { useEffect } from 'react';
import style from 'styled-components';
// hooks
import useScript from "../hooks/useScript";
// asset
import Image from "next/image";


const kakaoID = "91a50f2ae6db8ae5cdaf0916886e5793";
const baseurl = "https://resize.co.kr";

//왜안돼..
export default () => {
    const { loaded } = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    
    // useEffect(()=>{
    //   if(loaded){
    //     createKakaoBtn();
    //   }
    // }, [loaded])

    const createKakaoBtn = () => {
        if (window.Kakao) {
            const kakao = window.Kakao
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
              // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
              kakao.init(kakaoID)
            }
            kakao.Channel.addChannel({
              channelPublicId: '_exlQLxb'
            });
        }
    }



    return(
            <img
                src={'/images/add_channel.png'}
                style={{
                  width: '11.4rem',
                  height: '4.5rem'
                }}
                alt={"add_channel"}
                onClick={createKakaoBtn}
            />
            
    )
}


