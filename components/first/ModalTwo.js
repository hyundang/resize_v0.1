import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Modal } from "../../components/common";


export default ({setModalVisible}) => {
    return(
        <Modal setModalVisible={setModalVisible}>
            <div style={{fontSize:'1.8rem',fontWeight:'bold'}}>리사이즈 개인정보 수집 및 이용 동의</div>
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
    )
}
